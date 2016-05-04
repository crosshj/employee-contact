import React, {PropTypes} from 'react';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  type: 'text',
  value: ''
};

function Field(props) {
  return (
    <div className="field">
      <input
        type={props.type}
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
