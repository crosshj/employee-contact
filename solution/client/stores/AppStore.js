/* eslint no-underscore-dangle: ["error", { "allow": ["_state", "__emitChange"] }] */
import { ActionTypes } from '../constants';
import { Store } from 'flux/utils';
import Dispatcher from '../Dispatcher';

class AppStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);
    this._state = {
      employer: {}
    };
  }

  get() {
    return this._state;
  }

  __onDispatch(action) {
    switch (action.type) {
      case ActionTypes.UI_EMPLOYER_USER_NAME_CHANGE:
        this._state.employer.userName = action.payload;
        this.__emitChange();
        break;

      case ActionTypes.UI_EMPLOYER_PASSWORD_CHANGE:
        this._state.employer.password = action.payload;
        this.__emitChange();
        break;

      case ActionTypes.UI_EMPLOYER_SIGN_IN:
        this._state.employer.status = 'authenticating';
        this.__emitChange();
        break;

      case ActionTypes.UI_EMPLOYER_REGISTER:
        this._state.employer.status = 'registering';
        this.__emitChange();
        break;

      case ActionTypes.SERVICE_EMPLOYER_RECEIVE:
        this._state.employer = Object.assign({}, action.payload);
        this.__emitChange();
        break;

      default:
        break;
    }
  }
}

export default new AppStore(Dispatcher);
