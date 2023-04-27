import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import StartScreen from 'components/StartScreen';
import GameScreen from 'components/GameScreen';
import loading from 'reducers/loading';
import game from './reducers/game';

export const App = () => {
  const reducer = combineReducers({ game: game.reducer, loading: loading.reducer })
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <GameScreen />
      <StartScreen />
    </Provider>
  )
}