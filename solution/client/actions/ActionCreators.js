import Dispatcher from '../Dispatcher';
import { ActionTypes } from '../constants';

const ActionCreators = {
  EmployerSignIn() {
      Dispatcher.dispatch({
        type: ActionTypes.UI_EMPLOYER_SIGN_IN
      });
    },

  EmployerRegister() {
      Dispatcher.dispatch({
        type: ActionTypes.UI_EMPLOYER_REGISTER
      });
    },

  EmployerPasswordChange(password) {
      Dispatcher.dispatch({
        type: ActionTypes.UI_EMPLOYER_PASSWORD_CHANGE,
        payload: password
      });
    },

  EmployerUserNameChange(userName) {
      Dispatcher.dispatch({
        type: ActionTypes.UI_EMPLOYER_USER_NAME_CHANGE,
        payload: userName
      });
    },

  ContactSave() {
      Dispatcher.dispatch({
        type: ActionTypes.UI_CONTACT_SAVE
      });
    }
};

export default ActionCreators;
