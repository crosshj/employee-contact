import React, {PropTypes} from 'react';

export default class Field extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="field">
          <input
            type={this.props.type || 'text'}
            placeholder={this.props.label}
          />
      </div>
    );
  }
}