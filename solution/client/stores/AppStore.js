/* eslint no-underscore-dangle: ["error", { "allow": ["_state", "__emitChange"] }] */
import { ActionTypes } from '../constants';
import { Store } from 'flux/utils';
import Dispatcher from '../Dispatcher';
import _ from 'lodash';

    // TODO: would work better with first server GET and server-side rendering
const employerIdCookieValue = document
  .cookie
  .replace(/(?:(?:^|.*;\s*)employerId\s*=\s*([^;]*).*$)|^.*$/, '$1');

class AppStore extends Store {
  constructor(dispatcher) {
    super(dispatcher);

    this._state = {
      employer: {},
      contacts: [],
      selected: undefined
    };

    if (employerIdCookieValue) {
      this._state.employer.id = employerIdCookieValue;
      this._state.employer.status = 'signedIn';
    }
  }

  get() {
    const state = _.cloneDeep(this._state);
    return state;
  }

  __onDispatch(action) {
    console.log(action.type);
    switch (action.type) {
      case ActionTypes.UI_EMPLOYER_USER_NAME_CHANGE: {
        this._state.employer.userName = action.payload;
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_EMPLOYER_PASSWORD_CHANGE: {
        this._state.employer.password = action.payload;
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_EMPLOYER_SIGN_IN: {
        this._state.employer.status = 'authenticating';
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_EMPLOYER_SIGN_OUT: {
        this._state.employer = {};
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_EMPLOYER_REGISTER: {
        this._state.employer.status = 'registering';
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_CONTACT_ADD: {
        this._state.selected = {};
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_CONTACT_SELECT: {
        const contactId = action.payload;
        const selectedContact = this._state
          .contacts
          .filter((contact) => {
            return contact.id === contactId;
          })[0];
        this._state.selected = _.cloneDeep(selectedContact);
        this.__emitChange();
        break;
      }

      case ActionTypes.API_READ_USERS_SUCCESS: {
        const employer = action.payload.filter((user) => {
          return user.userType.toLowerCase() === 'employer';
        })[0];
        const contacts = action.payload.filter((user) => {
          return user.userType.toLowerCase() === 'contact';
        });
        this._state.employer = _.cloneDeep(employer);
        this._state.employer.status = 'signedIn';
        this._state.contacts = _.cloneDeep(contacts);
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_SELECTED_CONTACT_FIELD_CHANGE: {
        const options = action.payload;
        this._state.selected[options.field] = options.value;
        this._state.selected.status = 'dirty';
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_SELECTED_CONTACT_CANCEL: {
        this._state.selected = undefined;
        this.__emitChange();
        break;
      }

      case ActionTypes.UI_SELECTED_CONTACT_SAVE: {
        this._state.selected.status = 'saving';
        this.__emitChange();
        break;
      }

      case ActionTypes.API_CREATE_USER_SUCCESS: {
        if (action.payload.userType === 'Contact') {
          if (this._state.selected && this._state.selected.status) {
            delete this._state.selected.status;
          }
          this._state.contacts.push(action.payload);
          this._state.selected = undefined;
        }
        if (action.payload.userType === 'Employer') {
          this._state.employer = action.payload;
          this._state.employer.status = 'signedIn';
        }

        this.__emitChange();
        break;
      }

      case ActionTypes.API_DELETE_USER_SUCCESS: {
        const contacts = this._state
          .contacts
          .filter((contact) => {
            return contact.id !== this._state.selected.id;
          });
        this._state.contacts = _.cloneDeep(contacts);
        this._state.selected = undefined;
        this.__emitChange();
        break;
      }

      case ActionTypes.API_UPDATE_USER_SUCCESS: {
        if (this._state.selected && this._state.selected.status) {
          delete this._state.selected.status;
        }
        const contacts = this._state
          .contacts
          .map((contact) => {
            return contact.id === this._state.selected.id
              ? this._state.selected
              : contact;
          });
        this._state.contacts = _.cloneDeep(contacts);
        this._state.selected = undefined;
        this.__emitChange();
        break;
      }

      default: {
        break;
      }
    }
  }
}

export default new AppStore(Dispatcher);
