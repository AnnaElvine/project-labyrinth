import React from 'react';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Joke = () => {
  const joke = useSelector((store) => store.jokes.joke)
  const loading = useSelector((store) => store.jokes.loading)
  console.log('joke', joke)

  if (loading) {
    return <Loading />
  }
  return (
    joke && joke.id ?
      <div>
        <p>JOKE HERE:</p>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
      </div>
      : <p>No joke yet</p>
  )
}

export default Joke;