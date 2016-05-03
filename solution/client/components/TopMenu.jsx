import React, {PropTypes} from 'react';

export default class TopMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-menu">
        <ul>
          <li>&#8678;</li>
          <li>&#9989;</li>
        </ul>
      </div>
    );
  }
}