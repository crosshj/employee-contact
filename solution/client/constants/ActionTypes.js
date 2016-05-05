const actions = [
  'UI_EMPLOYER_REGISTER',
  'UI_EMPLOYER_SIGN_IN',
  'UI_EMPLOYER_PASSWORD_CHANGE',
  'UI_EMPLOYER_USER_NAME_CHANGE',
  'UI_CONTACTS_SAVE',
  'API_CREATE_USER_SUCCESS',
  'API_CREATE_USER_ERROR',
  'API_SIGN_IN_EMPLOYER_ERROR',
  'API_READ_USERS_SUCCESS',
  'API_READ_USERS_ERROR',
  'API_UPDATE_USER_SUCCESS',
  'API_UPDATE_USER_ERROR',
  'API_DELETE_USER_SUCCESS',
  'API_DELETE_USER_ERROR'
];

const actionTypes = actions.reduce((global, key) => {
  global[key] = key; // eslint-disable-line no-param-reassign
  return global;
}, {});

export default actionTypes;
