import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import jokes from 'reducers/jokes';
import StartScreen from 'components/StartScreen';

export const App = () => {
  const reducer = combineReducers({
    jokes: jokes.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}