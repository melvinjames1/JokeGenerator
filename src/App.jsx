import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [showSocials, setShowSocials] = useState(false);

  const fetchJoke = async () => {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    setJoke(response.data);
  };

  const toggleSocials = () => {
    setShowSocials(!showSocials);
  };

  return (
    <div className="App">
      <div className="joke-container">
        <h1>Joke Generator 😂</h1>
        <button className="fetch-button" onClick={fetchJoke}>Get Joke</button>
        {joke && (
          <div>
            <p className="joke-text">{joke.setup}</p>
            <p className="joke-text punchline">{joke.punchline}</p>
          </div>
        )}
      </div>
      <footer className="footer">
        <button className="social-button" onClick={toggleSocials}>Socials</button>
        {showSocials && (
          <div className="social-links">
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              Twitter -  
              <a href="https://twitter.com/MelvinJame61516" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">MelvinJame61516</a>
            </p>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              Instagram -
              <a href="https://www.instagram.com/melvin._.james/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">melvin._.james</a>
            </p>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              GitHub -
              <a href="https://github.com/melvinjames1" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">melvin._.james</a>
            </p>
            <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
              LinkedIn -
              <a href="https://www.linkedin.com/feed/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">Melvin James</a>
            </p>
          </div>
        )}
      </footer>
    </div>
  );
};

export default App;
