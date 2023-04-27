import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import GameScreen from 'components/GameScreen';
import game from './reducers/game.js';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <GameScreen />
      <StartScreen />
    </Provider>
  )
}