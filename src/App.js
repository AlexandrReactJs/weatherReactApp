import './App.css';
import React from 'react';
import CurrentlyWeather from './components/CurrentlyWather/CurrentlyWeather';

function App() {

  return (
    <div className="App">
      <div className='container'>
        <CurrentlyWeather/>
      </div>
    </div>
  );
}

export default App;
