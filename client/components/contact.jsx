/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const Contact = () => (
  <div>
    <div style={{ marginTop: '3.75rem' }} />
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input className="input" type="text" placeholder="Text input" />
      </div>
    </div>
    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-danger" type="email" placeholder="Email input" value="hello@" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle" />
        </span>
      </div>
      <p className="help is-danger">This email is invalid</p>
    </div>
    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea" />
      </div>
    </div>
  </div>
);

export default Contact;
