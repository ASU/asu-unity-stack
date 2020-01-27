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
const getOptions = (currentLayer, setOptions, props) => {
  // Get the currently selected layer to build query
  const node = currentLayer.current ? currentLayer.current : undefined;
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

            if (result.features) {
              // set the options state.
              setOptions(result.features);
            } else {
              // set empty if no features returned from result
              setOptions([]);
            }

            // run the onChange function with an empty value since
            // swapping out the Select list got rid of the old value
            const emptyVal = "{}";
            if (props.onChange) {
              props.onChange(emptyVal);
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
  }
};

/**
 * Main parent component which renders entire ASU Maps GIS Feature Select UI
 * @param {*} props
 */
const AsuGisFeaturePicker = props => {
  // Layer data and state hooks for the
  // GIS map layer tree select
  const layers = props.layers;
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  // mutable ref used for storing currently
  // selected layer node
  const currentLayer = useRef();

  // State hooks for the feature select list component
  const [options, setOptions] = useState([]);

  // Callbacks for setting state of the react-checkbox-tree tree component and
  // saving the tree node for later use.
  const checkCallback = useCallback(
    (checked, targetNode) => {
      // save the currently selected layer node
      currentLayer.current = targetNode;

      // set the checked value for the react-checkbox-tree
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

  //This effect only runs when the selected map layer changes.
  useEffect(() => {
    getOptions(currentLayer, setOptions, props);
  }, [checked]);

  // get the parent layer id which will be passed down to FeatureSelect component
  let parent = "";

  if (checked.length > 0) {
    parent = checked[0];
  }

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
      {options.length > 0 && (
        <FeatureSelect
          {...{
            parent: parent,
            options: options,
            onChange: props.onChange,
            selected: props.selected
          }}
        />
      )}
    </div>
  );
};

AsuGisFeaturePicker.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.string
};

AsuGisFeaturePicker.defaultProps = {
  layers: defaultLayers,
  selected: "{}"
};

export default AsuGisFeaturePicker;
