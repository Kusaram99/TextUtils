// import React from 'react';
import './App.css';
import Navbar from './modules/Nav';
import TextForm from './modules/TextForm';
// import About from './modules/About';
import React, { useState } from 'react'
import Alert from './modules/Alert';
// router
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


// themes
// import Themes from './modules/Theme';

function App() {
  const [mode, setmode] = useState('light');
  const [textArea, setTextArea] = useState({
    background: 'white',
    color: 'black'
  });

  // alert
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  // add dark mode 
  function togglefun() {
    if (mode === 'light') {
      setmode('dark');
      setTextArea({
        background: 'rgb(50 67 86)',
        color: 'white'
      });

      document.body.style.background = 'rgb(4 23 42)';
      document.body.style.color = 'white';
      // 03/09/2021
      showAlert('dark mode has been enbled', 'success');
    } else {
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      setmode('light');
      setTextArea({
        background: 'white',
        color: 'black'
      });
      showAlert('light mode has been enabled', 'success');

    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar about="About" contact="CONTACT" mode={mode} darkMode={togglefun} />
        {/* <Themes/> */}
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <TextForm showAlerts={showAlert} textArea={textArea} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
