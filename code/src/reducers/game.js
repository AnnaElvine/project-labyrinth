import { createSlice } from '@reduxjs/toolkit';

/* loading: A boolean flag that indicates whether a joke is currently being
 loaded from an external API or not.
 It is initialized to false.

joke: An object that represents the current joke that has been fetched from the API.
 It is initialized to an empty object {}.

category: A string that represents the current category of the joke being fetched.
 It is initialized to an empty string ''.

The name property of the slice defines the name of the slice, which is used to generate the
action types and action creators for the slice. In this case, the slice is named "jokes".

The createSlice function also generates a set of action creators and reducer functions based on
the initial state and a set of "reducers" provided as an argument. The reducers are functions that
modify the state based on the actions dispatched to the store.
However, the code you provided does not include the reducers.
*/
const initialState = {
  userName: '',
  description: '',
  loading: '',
  direction: ''
}
const labyrinth = createSlice({
  name: 'game',
  initialState,

  reducers: {
    // an action to save the joke to global state
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    // an action to save the category to global state
    setDescription: (state, action) => {
      state.description = action.payload
    },
    // an action to save the current loading state to global state
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setDirection: (state, action) => {
      state.direction = action.payload
    }
  }
});

export default labyrinth;

// a thunk to handle api call
// https://labyrinth.technigo.io/start
// https://labyrinth.technigo.io/action
// start game
export const startGame = () => {
  return (dispatch, getState) => {
    // set loading to true
    dispatch(labyrinth.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName })
    };

    // what replaces jokes.category?
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        // get the data from the api - save it as the joke in global state
        dispatch(labyrinth.actions.setDescription(json.description))
        // set loading to false
        dispatch(labyrinth.actions.setDirection(json.coordinates))
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  };
}