import React from 'react';
import { Container } from 'flux/utils';

import ContactView from './ContactView.jsx';
import ListView from './ListView.jsx';
import LoginView from './LoginView.jsx';
import Menu from './Menu.jsx';

import { AppStore } from '../stores';

class MainContainer extends React.Component {
  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    const appState = AppStore.get();
    appState.showContact = !!appState.selected;
    appState.showLogin = appState.employer.status !== 'signedIn';
    appState.showList = appState.employer.status === 'signedIn'
      && !appState.showContact;

    return appState;
  }

  render() {
    return (
      <div className="container">
        <Menu
          view={ this.state.showContact
                  ? "contact" 
                  : this.state.showList 
                    ? "list"
                    : "login"
                }
          dirty={this.state.selected && this.state.selected.status === 'dirty'}
          showDelete={!!this.state.selected && !!this.state.selected.id}
          visible={true}
        />
        <ContactView
          contact={this.state.selected}
          visible={this.state.showContact}
        />
        <LoginView
          userName={this.state.employer.userName}
          password={this.state.employer.password}
          visible={this.state.showLogin}
        />
        <ListView
          contacts={this.state.contacts}
          visible={this.state.showList}
        />
      </div>
    );
  }
}

export default Container.create(MainContainer, { pure: false });

