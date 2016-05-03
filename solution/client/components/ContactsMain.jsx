import React from 'react';

export default class ContactsMain extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    //this.setState(TodoStore.getList());
  }

  render() {
    return (
      <div className="container">
        hello
      </div>
    );
  }
}

