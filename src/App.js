import React from 'react';
import Preview from './components/Preview';
import Menus from './components/Menus';
import Submenu from './components/Submenu';
import Style from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className={Style.wrapperDiv}>
          <Preview />
          <Submenu header="Social Profile" />
          <Menus />
        </div>
      </div>
    </Router>
  );
}

export default App;
