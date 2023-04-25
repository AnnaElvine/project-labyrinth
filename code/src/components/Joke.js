import React, { useEffect } from "react";
import { useSelector } from 'react-redux';

const Joke = () => {
    // useSelector hook to grab smth from redux store
    const joke = useSelector((store) => store.jokes) // Global state
    console.log('global state joke', joke)
    
    return <div>
        <p>{joke.type}</p>
        <p>{joke.setup}</p>     
        <p>{joke.delivery}</p>     
    </div>;
}

export default Joke;

// useSelect to access global state (redux)
// or joke as a prop