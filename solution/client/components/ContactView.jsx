import React, {PropTypes} from 'react';
import Button from './shared/Button.jsx'
import Field from './shared/Field.jsx'

export default class ContactView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit-contact">
          <Field label='UserType' type='hidden'/>
          <Field label='UserName' />
          <Field label='Password' type='password'/>
          <Field label='Name' />
          <Field label='Email' type='email'/>
          <Field label='Phone' type='tel'/>
          <Field label='Address' />
          <Field label='State / Province' />
          <Field label='Zip' />
      </div>
    );
  }
}