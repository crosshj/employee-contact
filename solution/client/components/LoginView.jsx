import React, {PropTypes} from 'react';
import Button from './shared/Button.jsx';
import Field from './shared/Field.jsx';
import ActionCreators from '../actions/ActionCreators';

const propTypes = {
  name: PropTypes.string,
  password: PropTypes.string
};

const defaultProps = {
  name: '',
  password: ''
};

class LoginView extends React.Component {
  signIn() {
    ActionCreators.EmployerSignIn();
  }

  register() {
    ActionCreators.EmployerRegister();
  }

  passwordChange(event) {
    ActionCreators.EmployerPasswordChange(event.target.value);
  }

  userNameChange(event) {
    ActionCreators.EmployerUserNameChange(event.target.value);
  }

  render() {
    if (!this.props.visible){
      return null;
    }

    return (
      <div className="login-view">
        <Field
          label="User Name"
          value={this.props.userName}
          onChange={this.userNameChange}
        />
        <Field
          label="Password"
          type="password"
          value={this.props.password}
          onChange={this.passwordChange}
        />
        <Button
          text="Sign In"
          onClick={this.signIn}
        />
        <Button
          text="Register"
          onClick={this.register}
        />
      </div>
    );
  }
}

LoginView.propTypes = propTypes;
LoginView.defaultProps = defaultProps;

export default LoginView;
