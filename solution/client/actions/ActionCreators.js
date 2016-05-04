import Dispatcher from '../Dispatcher';
import { ActionTypes } from '../constants';

const ActionCreators = {
  employerSignIn() {
      Dispatcher.dispatch({
        type: ActionTypes.UI_EMPLOYER_SIGN_IN
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

  contactSave() {
      Dispatcher.dispatch({
        type: ActionTypes.UI_CONTACT_SAVE
      });
    }
};

export default ActionCreators;
