import React from 'react';
import JokeSearch from './JokeSearch';
import Joke from './Joke';

const StartScreen = () => {
  return (
    <div>
      <h1>Welcome to the Joke Jam!</h1>
      <JokeSearch />
      <Joke />
    </div>
  )
}

export default StartScreen;