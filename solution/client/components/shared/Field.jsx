import React, {PropTypes} from 'react';

const propTypes = {
  fieldType: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

const defaultProps = {
  fieldType: '',
  type: 'text',
  value: ''
};

function Field(props) {
  return (
    <div className="field">
      <input
        data-field={props.fieldType}
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
