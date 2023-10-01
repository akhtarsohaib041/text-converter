import React, {useState} from 'react'
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForms from './Components/TextForms.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');


  const [alert, setAlert] = useState(null);

  const sowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor ='black';
      sowAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      sowAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    {/* <Router> */}

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className='container my-3'>

        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} />}></Route> */}
          {/* <About mode={mode} /> */}

          {/* <Route exact path="/" element={<TextForms sowAlert={sowAlert} heading='Enter the text to analyze below' mode={mode} />}></Route>     */}

          <TextForms sowAlert={sowAlert} heading='Enter the text to analyze below' mode={mode} />

          
        {/* </Routes>        */}

      </div>

    {/* </Router> */}
      

    </>
  );
}

export default App;
