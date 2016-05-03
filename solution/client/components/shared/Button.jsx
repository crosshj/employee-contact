import React, {PropTypes} from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button">
        <button type="button">
          {this.props.text}
        </button>
      </div>
    );
  }
}