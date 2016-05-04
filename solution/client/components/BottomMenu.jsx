import React from 'react';

function BottomMenu(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="bottom-menu">
      <ul>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default BottomMenu;
