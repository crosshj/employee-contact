import React from 'react';

import ContactView from './ContactView.jsx';
import ListView from './ListView.jsx';
import LoginView from './LoginView.jsx';
import TopMenu from './TopMenu.jsx';
import BottomMenu from './BottomMenu.jsx';

function MainContainer() {
  return (
    <div className="container">
      <TopMenu />
      <ContactView />
      <LoginView />
      <ListView />
      <BottomMenu />
    </div>
  );
}


export default MainContainer;

