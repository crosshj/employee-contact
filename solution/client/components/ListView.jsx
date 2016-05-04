import React from 'react';

function ListView(props) {
  if (!props.visible) {
    return null;
  }

  return (
    <div className="list">
      List
    </div>
  );
}

export default ListView;
