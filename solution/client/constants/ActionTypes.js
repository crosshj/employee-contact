const actions = [
  'UI_EMPLOYER_REGISTER',
  'UI_EMPLOYER_SIGN_IN',
  'UI_EMPLOYER_PASSWORD_CHANGE',
  'UI_EMPLOYER_USER_NAME_CHANGE',
  'UI_CONTACTS_SAVE',
  'SERVICE_EMPLOYER_RECEIVE',
  'SERVICE_CONTACTS_RECEIVE'
];

const actionTypes = actions.reduce((global, key) => {
  global[key] = key; // eslint-disable-line no-param-reassign
  return global;
}, {});

export default actionTypes;
