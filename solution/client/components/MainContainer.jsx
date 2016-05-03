import React, {PropTypes} from 'react';

import ContactView from './ContactView.jsx'
import ListView from './ListView.jsx'
import LoginView from './LoginView.jsx'
import TopMenu from './TopMenu.jsx'
import BottomMenu from './BottomMenu.jsx'

export default class MainContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <TopMenu />
        <ContactView />
        <LoginView />
        <ListView />
        <BottomMenu />
      </div>
    );
  }
}

