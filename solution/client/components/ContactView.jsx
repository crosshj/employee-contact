import React from 'react';
import Field from './shared/Field.jsx';

function ContactView() {
  return (
    <div className="edit-contact">
      <Field label="UserType" type="hidden" />
      <Field label="UserName" />
      <Field label="Password" type="password" />
      <Field label="Name" />
      <Field label="Email" type="email" />
      <Field label="Phone" type="tel" />
      <Field label="Address" />
      <Field label="State / Province" />
      <Field label="Zip" />
    </div>
  );
}

export default ContactView;
