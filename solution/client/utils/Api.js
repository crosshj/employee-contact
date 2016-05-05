import {default as request} from 'superagent';
import actionCreators from '../actions/ActionCreators';

const ApiWrapper = {
  createUser(user) {
    const payload = user;
    request
      .post('/users')
      .send(payload)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          actionCreators.apiCreateUserError(err);
        } else {
          actionCreators.apiCreateUserSuccess(res.body);
        }
      });
  },

  signInEmployer(employer) {
    const payload = employer;
    request
      .post('/signIn')
      .send(payload)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          actionCreators.apiSignInEmployerError(err);
        } else {
          actionCreators.apiReadUsersSuccess(res.body);
        }
      });
  },

  readUsers(employer) {
    request
      .get('/users/' + employer.id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          actionCreators.apiReadUsersError(err);
        } else {
          actionCreators.apiReadUsersSuccess(res.body);
        }
      });
  },

  updateUser(user) {
    const payload = user;
    request
      .put('/users/' + user.id)
      .send(payload)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          actionCreators.apiUpdateUserError(err);
        } else {
          actionCreators.apiUpdateUserSuccess(res.body);
        }
      });
  },

  deleteUser(user) {
    request
      .delete('/users/' + user.id)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) {
          actionCreators.apiDeleteUserError(err);
        } else {
          actionCreators.apiDeleteUserSuccess(res.body);
        }
      });
  }
};

export default ApiWrapper;
