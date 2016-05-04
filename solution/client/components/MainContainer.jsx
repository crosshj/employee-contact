import React from 'react';
import { Container } from 'flux/utils';

import ContactView from './ContactView.jsx';
import ListView from './ListView.jsx';
import LoginView from './LoginView.jsx';
import TopMenu from './TopMenu.jsx';
import BottomMenu from './BottomMenu.jsx';

import AppStore from '../stores/AppStore';

class MainContainer extends React.Component {
  static getStores() {
    return [ AppStore ];
  }

  static calculateState() {
    const appState = AppStore.get();

    appState.showContact=false;
    appState.showLogin=true;
    appState.showList=false;

    return appState;
  }

  render() {
    return (
      <div className="container">
        <TopMenu
          visible={!this.state.showLogin}
        />
        <ContactView
          visible={this.state.showContact}
        />
        <LoginView
          userName={this.state.employer.userName}
          password={this.state.employer.password}
          visible={this.state.showLogin}
        />
        <ListView
          visible={this.state.showList}
        />
        <BottomMenu
          visible={!this.state.showLogin}
        />
      </div>
    );
  }
}

export default Container.create(MainContainer, { pure: false });

