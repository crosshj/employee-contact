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

      default: {
        break;
      }
    }
  }
}

export default new AppService(Dispatcher);
