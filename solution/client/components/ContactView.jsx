import React from 'react';
import Field from './shared/Field.jsx';
import actionCreators from '../actions/ActionCreators';

function onChange(event) {
  actionCreators.selectedContactFieldChange({
      field: event.currentTarget.dataset.field,
      value: event.currentTarget.value
  });
}

function ContactView(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="contactView">
      <Field
        fieldType="userName"
        label="User Name"
        onChange={onChange}
        type={props.contact.userType === 'Employer'
          ? "text"
          : "hidden"
        }
        value={props.contact.userName}
      />
      <Field
        fieldType="password"
        label="Password"
        onChange={onChange}
        type={ props.contact.userType === 'Employer' 
          ? "password" 
          : "hidden"
        }
        value={props.contact.password}
      />
      <Field
        fieldType="name"
        onChange={onChange}
        label="Name"
        value={props.contact.name}
      />
      <Field
        fieldType="email"
        label="Email"
        onChange={onChange}
        type="email"
        value={props.contact.email}
      />
      <Field
        fieldType="phone"
        label="Phone"
        onChange={onChange}
        type="tel"
        value={props.contact.phone}
      />
      <Field
        fieldType="address"
        label="Address"
        onChange={onChange}
        value={props.contact.address}
      />
      <Field
        fieldType="city"
        label="City"
        onChange={onChange}
        value={props.contact.city}
      />
      <Field
        fieldType="state"
        label="State / Province"
        onChange={onChange}
        value={props.contact.state}
      />
      <Field
        fieldType="zip"
        label="Zip"
        onChange={onChange}
        value={props.contact.zip}
      />
    </div>
  );
}

export default ContactView;
