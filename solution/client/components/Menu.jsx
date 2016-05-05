import React from 'react';
import actionCreators from '../actions/ActionCreators';

function onBackClick() {
  actionCreators.selectedContactCancel();
}

function onCheckClick() {
  actionCreators.selectedContactSave();
}

function onAddClick() {
  actionCreators.contactAdd();
}

function onDeleteClick() {
  actionCreators.selectedContactDelete();
}

function onSignOutClick() {
  actionCreators.employerSignOut();
}

function Menu(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="menu">
      { props.view === 'contact'
        ? <div className="title">Edit Contact</div>
        : null
      }
      { props.view === 'list'
        ? <div className="title">All Contacts</div>
        : null
      }
      <ul className="topMenu">
        { props.view === 'contact'
          ? <li
              className="back"
              onClick={onBackClick}
            >&#8678;</li>
          : null
        }
        { props.dirty
          ? <li
              className="confirmContact"
              onClick={onCheckClick}
            >&#9989;</li>
          : null
        }
      </ul>

      { props.view === 'list'
        ? <ul className="floatMenu">
            <li
              className="addContact"
              onClick={onAddClick}
            >&#65291;</li>
          </ul>
        : null
      }

      <ul className="bottomMenu">
        { props.view === 'list'
          ? <li 
              className="signOut"
              onClick={onSignOutClick}
            >Sign Out</li>
          : null
        }
        { props.view === 'contact'
          && !!props.showDelete
          ? <li
              className="deleteContact"
              onClick={onDeleteClick}
            >Delete Contact</li>
          : null
        }
      </ul>
    </div>
  );
}

export default Menu;
