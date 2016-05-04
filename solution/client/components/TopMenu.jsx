import React from 'react';

function TopMenu(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="top-menu">
      <ul>
        <li>&#8678;</li>
        <li>&#9989;</li>
      </ul>
    </div>
  );
}

export default TopMenu;
