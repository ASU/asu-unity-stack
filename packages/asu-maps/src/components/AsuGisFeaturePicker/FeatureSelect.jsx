import React, { useState } from "react";
import PropTypes from "prop-types";

const FeatureSelect = props => {
  // we need to store parent layer id along
  // with the feature object id in order to build
  // interactive map URL
  const parent = props.parent;
  const options = props.options;

  // initialize select state from passed selected prop
  const [selected, setSelect] = useState(props.selected);

  // handles changes in select list
  const handleChange = e => {
    const val = e.target.value;

    setSelect(val);

    if (props.onChange) {
      props.onChange(val);
    }
  };

  if (options.length > 0) {
    return (
      <div style={{ paddingLeft: "75px" }}>
        <label>
          <h2>Select a Feature</h2>
          <select value={selected} onChange={e => handleChange(e)}>
            <option value="{}">Choose...</option>
            {options
              .sort((a, b) => {
                if (a.attributes.Name < b.attributes.Name) {
                  return -1;
                }
                if (a.attributes.Name > b.attributes.Name) {
                  return 1;
                }
                return 0;
              })
              .map((item, index) => {
                if (item.attributes.OBJECTID && item.attributes.Name) {
                  // reshape the feature data from the API
                  const data = {
                    id: item.attributes.OBJECTID,
                    name: item.attributes.Name,
                    lat: item.geometry.y,
                    lng: item.geometry.x,
                    parent: parent
                  };

                  return (
                    <option
                      key={item.attributes.OBJECTID}
                      value={JSON.stringify(data)}
                    >
                      {item.attributes.Name}
                    </option>
                  );
                }
              })}
          </select>
        </label>
      </div>
    );
  } else {

    const noResStyles = {
      padding: '2em'
    };

    return (
      <div style={noResStyles}>
        <h2>No options to display.</h2>
      </div>
    );
  }
};

FeatureSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func,
  parent: PropTypes.string,
  selected: PropTypes.string
};

FeatureSelect.defaultProps = {
  options: [],
  selected: "{}"
};

export default FeatureSelect;
