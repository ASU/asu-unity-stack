import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import defaultLayers from "./AsuGisLayersBackup.json";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const AsuGisFeaturePicker = props => {
  // Layer data and state hooks for the
  // GIS map layer tree select
  const layers = props.layers;
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  // mutable ref used for keeping track of currently
  // selected layer
  const currentLayer = useRef();

  // state handling for feature picker
  const [options, setOptions] = useState([]);
  const [selectedFeature, setSelected] = useState("{}");

  // Callbacks for setting state of the
  // layer tree component
  const checkCallback = useCallback(
    (checked, targetNode) => {
      currentLayer.current = targetNode;

      setChecked([targetNode.value]);
    },
    [checked]
  );
  const expandCallback = useCallback(
    (expanded, targetNode) => {
      setExpanded(expanded);
    },
    [expanded]
  );

  /* This effect only runs when the selected map layer changes.
   It does an AJAX fetch request to the GIS layer
   endpoint, then sets the 'options' state variable with
   retrieved items. This in turn causes the select list to
   re-render. */
  useEffect(() => {
    // reset selectedFeature to empty when checking a new layer
    setSelected("{}");

    // Get the currently selected layer to build query
    const node = currentLayer.current;
    const query = "/query?where=1=1&outFields=OBJECTID,Name,SHAPE&f=json";

    if (node) {
      // build URL from layer data, then fetch feature options
      // and set state
      const parent = node.hasOwnProperty("parent") ? node.parent : null;

      const id =
        parent.hasOwnProperty("id") && parent.hasOwnProperty("value")
          ? node.value.substring(parent.value.length)
          : node.value;
      const url = parent.hasOwnProperty("url") ? parent.url : node.url;

      if (url) {
        fetch(url + "/" + id + query)
          .then(res => res.json())
          .then(
            result => {
              setOptions(result.features);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            error => {
              console.log(error);
            }
          );
      }
    }
  }, [checked]);

  /**
   * Renders features retrieved from layer api into a
   * select list
   * @param {*} options
   */
  const layerSelect = options => {
    // handles changes in select list
    const handleChange = e => {
      const val = e.target.value;
      setSelected(val);

      if (props.onChange) {
        props.onChange(e);
      }
    };

    if (options && options.length > 0) {
      return (
        <div>
          <h2>Select a Feature</h2>
          <select value={selectedFeature} onChange={e => handleChange(e)}>
            <option value="{}">Choose...</option>
            {options.map((item, index) => {
              // reshape the item data from the API
              const data = {
                id: item.attributes.OBJECTID,
                name: item.attributes.Name,
                lat: item.geometry.x,
                long: item.geometry.y
              };

              return (
                <option key={index} value={JSON.stringify(data)}>
                  {item.attributes.Name}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else {
      return "";
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row"
  };

  // return complete rendered component
  return (
    <div style={containerStyle}>
      <div>
        <h2>Select a Layer</h2>
        <CheckboxTree
          checked={checked}
          expanded={expanded}
          onCheck={checkCallback}
          onExpand={expandCallback}
          nodes={layers}
          nativeCheckboxes={true}
          onlyLeafCheckboxes={true}
        />
      </div>
      {layerSelect(options)}
    </div>
  );
};

AsuGisFeaturePicker.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func
};

AsuGisFeaturePicker.defaultProps = {
  layers: defaultLayers
};

export default AsuGisFeaturePicker;
