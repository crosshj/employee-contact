import React, {PropTypes} from 'react';

const propTypes = {
  text: PropTypes.string.isRequired
};

function Button(props) {
  return (
    <div className="button">
      <button type="button">
        {props.text}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
