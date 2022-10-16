import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
React.useEffect(() => {
  axios.get('https://api.gismeteo.net/v2/weather/current/4368/', {headers: {'X-Gismeteo-Token': '56b30cb255.3443075'}}).then((res)=> {
    console.log(res)
  })
}, [])

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

export default App;
