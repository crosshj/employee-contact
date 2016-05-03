import React, {PropTypes} from 'react';
import Button from './shared/Button.jsx'
import Field from './shared/Field.jsx'

export default class LoginView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <div>
          <Field label='Name' />
          <Field label='Password' />
          <Button text='Sign In' />
          <Button text='Register' />
        </div>
      </div>
    );
  }
}