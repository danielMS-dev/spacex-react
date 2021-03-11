import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import  Launches  from './components/Launches';
import LaunchesContextProvider from './contexts/LaunchesContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/Layout.css'


//import logo from './logo.svg';
//import './App.css';

const App = () =>(
<BrowserRouter>
<LaunchesContextProvider>
<div className="layout">
    <Launches/>
    </div>
    </LaunchesContextProvider>
</BrowserRouter>
)

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */
export default App;
