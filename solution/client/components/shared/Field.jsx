import React, {PropTypes} from 'react';

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

function Field() {
  return (
    <div className="field">
      <input
        type={this.props.type || 'text'}
        placeholder={this.props.label}
      />
    </div>
  );
}

Field.propTypes = propTypes;

export default Field;
