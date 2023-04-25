import { createSlice } from '@reduxjs/toolkit';

const jokes = createSlice({
  name: 'jokes',
  initialState: {
    loading: false,
    joke: {},
    category: ''
  },
  reducers: {
    // an action to save the joke to global state
    setJoke: (store, action) => {
      store.joke = action.payload
    },
    // an action to save the category to global state
    setCategory: (store, action) => {
      store.category = action.payload
    },
    // an action to save the current loading state to global state
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
});

export default jokes;

// a thunk to handle api call
// https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
// Blacklisting to get nice jokes
export const getJoke = () => {
  return (dispatch, getState) => {
    // set loading to true
    dispatch(jokes.actions.setLoading(true))

    fetch(`https://v2.jokeapi.dev/joke/${getState().jokes.category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
      .then((response) => response.json())
      .then((json) => {
        // get the data from the api - save it as the joke in global state
        dispatch(jokes.actions.setJoke(json))
        // set loading to false
        dispatch(jokes.actions.setLoading(false))
      })
  }
}