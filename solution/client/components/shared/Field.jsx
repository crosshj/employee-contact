import React, {PropTypes} from 'react';

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string
};

const defaultProps = {
  type: 'text',
};

function Field(props) {
  return (
    <div className="field">
      <input
        type={props.type}
        placeholder={props.label}
      />
    </div>
  );
}

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Field;
