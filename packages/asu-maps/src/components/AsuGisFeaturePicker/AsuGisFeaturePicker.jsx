import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import defaultLayers from "./AsuGisLayersBackup.json";
import CheckboxTree from "react-checkbox-tree";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const AsuGisFeaturePicker = props => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const checkCallback = useCallback((checked, targetNode) => {
    setChecked(checked)
  }, [checked]);
  const expandCallback = useCallback((expanded, targetNode) => {
    setExpanded(expanded)
  }, [expanded]);

  const layers = props.layers;

  return (
    <CheckboxTree
      checked={checked}
      expanded={expanded}
      onCheck={checkCallback}
      onExpand={expandCallback}
      nodes={layers}
      iconsClass="fa5"
      checkModel="all"
      nativeCheckboxes={true}
    />
  );
};

AsuGisFeaturePicker.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.object)
};

AsuGisFeaturePicker.defaultProps = {
  layers: defaultLayers
};

export default AsuGisFeaturePicker;
