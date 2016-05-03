import React, {PropTypes} from 'react';

export default class TopMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-menu">
        <ul>
          <li>Logout</li>
        </ul>
      </div>
    );
  }
}