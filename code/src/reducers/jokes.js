import { createSlice} from '@reduxjs/toolkit';

const jokes = createSlice({
    name: 'jokes',
    initialState: { // if we don't have an inState,
    // we don't need it as an empty object to start with
        // category: '', // later populated with jokes. inState not needed.
        // joke: {
        //     vcator: '' to match api. adds the whole joke as object in state
        joke: {},
        category: '' // category comes from the input
    },
    reducers: {
        setJoke:(store, action) => {
            // store.joke = action.payload // payload comes after api call in thunk
            // instead of taking action.payload like above we can spread it out
            // store.joke = [...store.joke, action.payload]
            store.joke = action.payload
        };
        // an action to save the joke to global state
        // an action to save the category to global state
        setCategory: (store, action) => {
            store.category = action.payload
        }
    }
});

export default jokes;

// a thunk to handle api call
export const getJoke = () => {
    return (dispatch, getState) => {
        fetch(`https://v2.jokeapi.dev/joke/${getState().jokes.category}`)
            .then((response) => response.json())
            .then((potato) => dispatch(jokes.actions.setJoke(potato))) // here we set the action. can't just set, need dispatch
    }
}