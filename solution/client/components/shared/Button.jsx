import React, {PropTypes} from 'react';

const propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

function Button({ text, onClick }) {
  return (
    <div className="button">
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = propTypes;

export default Button;
