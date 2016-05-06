import React, {PropTypes} from 'react';
import actionCreators from '../actions/ActionCreators';

const propTypes = {
  contacts: PropTypes.array.isRequired
};

class ListView extends React.Component {
  constructor(props) {
    super(props);

    this.onClickContact = this.onClickContact.bind(this);
  }

  onClickContact(event) {
    actionCreators.contactSelect(
      event.currentTarget.dataset.id
    );
  }

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div className="list">
        <ul>
          {this.props.contacts.map(
              (contact, index) => (
                <p
                  data-id={contact.id}
                  key={index}
                  onClick={this.onClickContact}
                >
                  {contact.name}
                </p>
              )
            )
          }
        </ul>
      </div>
    );
  }
}

ListView.propTypes = propTypes;

export default ListView;
