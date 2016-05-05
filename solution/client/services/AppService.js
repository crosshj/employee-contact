import { ActionTypes } from '../constants';
import { Store } from 'flux/utils';
import Dispatcher from '../Dispatcher';
import { AppStore } from '../stores';
import { Api } from '../utils';

class AppService extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this.stores = {
      AppStore
    };
    const appState = this.stores.AppStore.get();
    if (appState.employer.id && appState.contacts.length <= 0) {
      Api.readUsers(appState.employer);
    }
  }

  getCurrentState() {
    const currentState = Object
      .getOwnPropertyNames(this.stores)
      .reduce((prev, key) => {
        prev[key] = this.stores[key].get(); // eslint-disable-line no-param-reassign
        return prev;
      }, {});
    return currentState;
  }

  __onDispatch(action) {
    switch (action.type) {
      case ActionTypes.UI_EMPLOYER_SIGN_IN: {
        const state = this.getCurrentState();
        Api.signInEmployer(state.AppStore.employer);
        break;
      }

      case ActionTypes.UI_SELECTED_CONTACT_SAVE: {
        const state = this.getCurrentState();
        if (!state.AppStore.selected.id){
          let selected = state.AppStore.selected;
          selected.createdBy = state.AppStore.employer.id;
          selected.userType = 'Contact';  
          Api.createUser(selected);
        } else {
          Api.updateUser(state.AppStore.selected);
        }
        break;
      }

     case ActionTypes.UI_SELECTED_CONTACT_DELETE: {
        const state = this.getCurrentState();
        let selected = state.AppStore.selected;  
        Api.deleteUser(selected);
        break;
      }

      case ActionTypes.UI_EMPLOYER_SIGN_OUT: {
        document.cookie = "employerId=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default new AppService(Dispatcher);
