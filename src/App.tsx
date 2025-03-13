import './App.css';
import React from 'react';
import CurrentlyWeather from './components/CurrentlyWather/CurrentlyWeather';
import ChunkWeather from './components/ChunkWeather/ChunkWeather';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='container'>
        <CurrentlyWeather />
        <ChunkWeather />
      </div>
    </div>
  );
}

export default App; 