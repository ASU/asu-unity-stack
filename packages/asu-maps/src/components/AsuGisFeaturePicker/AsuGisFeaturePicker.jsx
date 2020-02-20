import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import defaultLayers from "./AsuGisLayersBackup.json";
import CheckboxTree from "react-checkbox-tree";
import FeatureSelect from "./FeatureSelect";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

/* Helper function to do fetch request to the GIS layer
   endpoint, then sets the 'options' state variable with
   retrieved items. This in turn causes the select list to
   re-render with new options.*/
const getOptions = (value, setOptions, props) => {
  if (value) {
    // Build query URL given the currently checked value and layer tree
    const url = getLayerUrl(props.layers, value);

    // Fetch map features from GIS api and set options state using setOptions hook
    if (url) {
      fetch(url)
        .then(res => res.json())
        .then(
          result => {
            if (result.features) {
              // set the options state.
              setOptions(result.features);
            } else {
              // set empty if no features returned from result
              setOptions([]);
            }
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            console.log(error);
          }
        );
    }

    // reset options to empty if nothing checked
  } else {
    setOptions([]);
  }
};

// Get the  numerical layer ID given a tree node from the
// react-checkbox-tree component
const getParentId = (layers, value) => {
  let id;

  if (value) {
    for (let i = 0; i < layers.length; i++) {
      if (value.includes(layers[i].id)) {
        const topLayer = layers[i];
        id = topLayer.id;
      }
    }
  }

  return id;
};

/** Get the layer API URL given the tree and a selected tree value */
const getLayerUrl = (layers, value) => {
  let url;
  const query = "/query?where=1=1&outFields=OBJECTID,Name,SHAPE&f=json";

  for (let i = 0; i < layers.length; i++) {

    if (value.includes(layers[i].id) && value != layers[i].id) {
      const topLayer = layers[i];
      const childId = value.substring(topLayer.id.length + 1);
      url = topLayer.url + "/" + childId + query;
    }
  }

  return url;
};

/**
 * Main parent component which renders entire ASU Maps GIS Feature Select UI
 * @param {*} props
 */
const AsuGisFeaturePicker = props => {
  // Layer data and state hooks for the
  // GIS map layer tree select
  const layers = props.layers;

  const savedLayer = props.selected.parent ? [props.selected.parent] : [];
  const parentLayer =
    savedLayer.length > 0 ? [getParentId(layers, savedLayer[0])] : [];

  const [checked, setChecked] = useState(savedLayer);
  const [expanded, setExpanded] = useState(parentLayer);

  // State hooks for the feature select list component
  const [options, setOptions] = useState([]);

  // Callbacks for setting state of the react-checkbox-tree tree component and
  // saving the tree node for later use.
  const checkCallback = useCallback(
    (checked, targetNode) => {
      // Set checked state to only the latest checked node value. This logic
      // in effect only allows one selected value at a time.
      if (checked.length > 0) {
        setChecked([targetNode.value]);

      // if checked is empty (unchecked), set to the empty val
      } else {
        setChecked(checked);
      }

      // run the onChange function with an empty select option value since
      // swapping out the Select list got rid of the old value
      const emptyVal = "{}";
      if (props.onChange) {
        props.onChange(emptyVal);
      }
    },
    [checked]
  );

  const expandCallback = useCallback(
    (expanded, targetNode) => {
      setExpanded(expanded);
    },
    [expanded]
  );

  //This effect only runs when the selected map layer changes.
  useEffect(() => {
    getOptions(checked[0], setOptions, props);
  }, [checked]);

  // Not much styling yet so we'll apply these inline for now.
  // As we theme this component in the future we may want to add a modular CSS
  // stylesheet as well.
  const containerStyle = {
    display: "flex",
    flexDirection: "row"
  };

  // return complete rendered component
  return (
    <div style={containerStyle}>
      <div>
        <CheckboxTree
          checked={checked}
          expanded={expanded}
          onCheck={checkCallback}
          onExpand={expandCallback}
          nodes={layers}
          nativeCheckboxes={true}
          onlyLeafCheckboxes={true}
          id="asu-gis-fp"
        />
      </div>
      <div>
        {checked.length > 0 ? (
          <FeatureSelect
            {...{
              parent: checked.length > 0 ? checked[0] : undefined,
              options: options,
              onChange: props.onChange,
              selected: props.selected
                ? JSON.stringify(props.selected)
                : undefined
            }}
          />
        ) : (
          <h2 style={{paddingLeft: '1em'}}>&#8592; Select a layer to display options.</h2>
        )}
      </div>
    </div>
  );
};

AsuGisFeaturePicker.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.object
};

AsuGisFeaturePicker.defaultProps = {
  layers: defaultLayers,
  selected: {}
};

export default AsuGisFeaturePicker;
