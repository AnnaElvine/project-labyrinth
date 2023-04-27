import { createSlice } from '@reduxjs/toolkit';
import loading from './components/Loading.js';

const initialState = {
  username: '',
  description: '',
  direction: '',
  loading: '', // should it be placed here?
  actions: []
}
const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // an action to save the joke to global state
    setUsername: (state, action) => {
      state.username = action.payload
    },
    // an action to save the category to global state
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setDirection: (state, action) => {
      state.direction = action.payload
    },
    // an action to save the current loading state to global state
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setActionOption: (state, action) => {
      state.actions = action.payload
    }
  }
});

export default game;

// a thunk to handle api call
// https://labyrinth.technigo.io/start
// https://labyrinth.technigo.io/action
// start game
export const startGame = () => {
  return (dispatch, getState) => {
    // set loading to true
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    };

    // what replaces jokes.category?
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      // below, json = data
      .then((json) => {
        console.log(json)
        // get the data from the api - save it as the joke in global state
        dispatch(game.actions.setDescription(json.description))
        // set loading to false
        dispatch(game.actions.setDescription(json.description))
        dispatch(game.actions.setDirection(json.direction))
        dispatch(game.actions.setAction(json.action))
        dispatch(game.actions.setLoading(false))
      })
  }
}

export const actionsGame = (type, direction) => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction
      })
    }
    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch(game.actions.setDescription(json.description))
        dispatch(game.actions.setDirection(json.direction))
        dispatch(game.actions.setAction(json.action))
        dispatch(game.actions.setLoading(false))
      })
  }
}