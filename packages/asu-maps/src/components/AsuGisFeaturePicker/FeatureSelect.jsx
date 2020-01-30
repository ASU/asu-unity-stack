import React, {useState} from 'react';
import PropTypes from 'prop-types';

const FeatureSelect = (props) => {

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

  if (options && options.length > 0) {
    return (
      <div style={{paddingLeft: '75px'}}>
        <h2>Select a Feature</h2>
        <select value={selected} onChange={e => handleChange(e)}>
          <option value="{}">Choose...</option>
          {options.map((item, index) => {
            // reshape the feature data from the API
            const data = {
              id: item.attributes.OBJECTID,
              name: item.attributes.Name,
              lat: item.geometry.x,
              lng: item.geometry.y,
              parent: parent
            };

            return (
              <option key={item.attributes.OBJECTID} value={JSON.stringify(data)}>
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
