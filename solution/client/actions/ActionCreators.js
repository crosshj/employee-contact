import Dispatcher from '../Dispatcher';
import { ActionTypes } from '../constants';

const ActionCreators = {
  // UI EVENTS ---------------
  employerSignIn() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_EMPLOYER_SIGN_IN
    });
  },

  employerSignOut() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_EMPLOYER_SIGN_OUT
    });
  },

  employerRegister() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_EMPLOYER_REGISTER
    });
  },

  employerPasswordChange(password) {
    Dispatcher.dispatch({
      type: ActionTypes.UI_EMPLOYER_PASSWORD_CHANGE,
      payload: password
    });
  },

  employerUserNameChange(userName) {
    Dispatcher.dispatch({
      type: ActionTypes.UI_EMPLOYER_USER_NAME_CHANGE,
      payload: userName
    });
  },

  contactAdd() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_CONTACT_ADD
    });
  },

  contactSave() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_CONTACT_SAVE
    });
  },

  contactSelect(contactId) {
    Dispatcher.dispatch({
      type: ActionTypes.UI_CONTACT_SELECT,
      payload: contactId
    });
  },

  selectedContactCancel() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_SELECTED_CONTACT_CANCEL
    });
  },

  selectedContactSave() {
    Dispatcher.dispatch({
      type: ActionTypes.UI_SELECTED_CONTACT_SAVE
    });
  },

  selectedContactDelete(contactId) {
    Dispatcher.dispatch({
      type: ActionTypes.UI_SELECTED_CONTACT_DELETE,
      payload: contactId
    });
  },

  selectedContactFieldChange(options) {
    Dispatcher.dispatch({
      type: ActionTypes.UI_SELECTED_CONTACT_FIELD_CHANGE,
      payload: options
    });
  },

  // API EVENTS ---------------
  apiCreateUserSuccess(res) {
    Dispatcher.dispatch({
      type: ActionTypes.API_CREATE_USER_SUCCESS,
      payload: res
    });
  },

  apiCreateUserError(error) {
    Dispatcher.dispatch({
      type: ActionTypes.API_CREATE_USER_ERROR,
      payload: error
    });
  },

  apiSignInEmployerError(error) {
    Dispatcher.dispatch({
      type: ActionTypes.API_SIGN_IN_EMPLOYER_ERROR,
      payload: error
    });
  },

  apiReadUsersSuccess(res) {
    Dispatcher.dispatch({
      type: ActionTypes.API_READ_USERS_SUCCESS,
      payload: res
    });
  },

  apiReadUsersError(error) {
    Dispatcher.dispatch({
      type: ActionTypes.API_READ_USERS_ERROR,
      payload: error
    });
  },

  apiUpdateUserSuccess(res) {
    Dispatcher.dispatch({
      type: ActionTypes.API_UPDATE_USER_SUCCESS,
      payload: res
    });
  },

  apiUpdateUserError(error) {
    Dispatcher.dispatch({
      type: ActionTypes.API_UPDATE_USER_ERROR,
      payload: error
    });
  },

  apiDeleteUserSuccess(res) {
    Dispatcher.dispatch({
      type: ActionTypes.API_DELETE_USER_SUCCESS,
      payload: res
    });
  },

  apiDeleteUserError(error) {
    Dispatcher.dispatch({
      type: ActionTypes.API_DELETE_USER_ERROR,
      payload: error
    });
  }

};

export default ActionCreators;
