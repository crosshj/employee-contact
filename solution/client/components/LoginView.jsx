import React from 'react';
import Button from './shared/Button.jsx';
import Field from './shared/Field.jsx';

function LoginView() {
  return (
    <div className="login-view">
      <Field label="Name" />
      <Field label="Password" />
      <Button text="Sign In" />
      <Button text="Register" />
    </div>
  );
}

export default LoginView;
