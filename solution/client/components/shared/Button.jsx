import React, {PropTypes} from 'react';

const propTypes = {
  text: PropTypes.string
};

function Button() {
  return (
    <div className="button">
      <button type="button">
        {this.props.text}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
