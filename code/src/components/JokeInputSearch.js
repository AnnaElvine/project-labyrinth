import React from "react";
import { useDispatch } from "react-redux";
import jokes, { getJoke } from "reducers/jokes";

const JokeInputSearch = () => {
    const [jokeCategoryInputValue, setJokeCategoryInputValue] = useState('');
    const dispatch = useDispatch();
    
    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(jokes.actions.setCategory(jokeCategoryInputValue));
        dispatch(getJoke());
    }

    return (
        <form onSubmit={(event) => onFormSubmit(event)}>
            <label htmlFor="joke-input">
                Provide a category, please:
                <input id="joke-input" type="text" onChange={(event) => setJokeCategoryInputValue(event)} />
            </label>
            <button type="submit">get joke</button>
        </form>
    )
}

export default JokeInputSearch;