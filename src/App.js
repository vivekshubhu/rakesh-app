import React, { useState } from 'react';
import Preview from './components/Preview';
import Menus from './components/Menus';
import Submenu from './components/Submenu';
import Style from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [header, setHeader] = useState('');

  const getSubmenuHeader = (header) => {
    // console.log(header);
    setHeader(header);
  }
  return (
    <Router>
      <div className="App">
        <div className={Style.wrapperDiv}>
          <Preview />
          <Submenu header={header} />
          <Menus getSubmenuHeader={getSubmenuHeader} header={header} />
        </div>
      </div>
    </Router>
  );
}

export default App;
