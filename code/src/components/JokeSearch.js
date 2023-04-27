// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import jokes, { getJoke } from 'reducers/jokes';

// const JokeSearch = () => {
//   const [jokeCategoryInputValue, setJokeCategoryInputValue] = useState('');
//   const dispatch = useDispatch();

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     // save the category to global state
//     dispatch(jokes.actions.setCategory(jokeCategoryInputValue));

//     // send request to api
//     dispatch(getJoke());

//     // clear the input
//     setJokeCategoryInputValue('')
//   }

//   return (
//     <form onSubmit={(event) => onFormSubmit(event)}>
//       <label htmlFor="joke-input">
//         Provide a category, please (Programming, Pun, Misc, Christmas):
//         <input
//           id="joke-input"
//           type="text"
//           value={jokeCategoryInputValue}
//           onChange={(event) => setJokeCategoryInputValue(event.target.value)} />
//       </label>
//       <button type="submit">get joke</button>
//     </form>)
// }

// export default JokeSearch;