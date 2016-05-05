import { ActionTypes } from '../constants';
import { Store } from 'flux/utils';
import Dispatcher from '../Dispatcher';
import { AppStore } from '../stores';
import { Api } from '../utils';

// TODO: would work better with first server GET and server-side rendering
const employerIdCookieValue = document
  .cookie
  .replace(/(?:(?:^|.*;\s*)employerId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if (employerIdCookieValue) {
  Api.readUsers({ id: employerIdCookieValue});
}

class AppService extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this.stores = {
      AppStore
    };
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
        Api.updateUser(state.AppStore.selected);
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
