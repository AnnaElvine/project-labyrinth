/* eslint-disable react/jsx-no-undef */
// /* eslint-disable no-unused-vars */
// import React from 'react';

// const GameScreen = () => {
//   return (
//     <h1>hej</h1>
//   )
// }
// export default GameScreen;

import React from 'react'
import game from 'reducers/game'
import { useSelector, useDispatch } from 'react-redux'
import Directions from './Directions';

const GameScreen = () => {
  const description = useSelector((store) => store.game.description)
  const direction = useSelector((store) => store.game.direction)
  const dispatch = useDispatch()

  const restart = () => {
    dispatch(game.actions.setUsername(''))
    window.location.reload()
  }
  return (
    <GameCard>
      {description}
      {direction !== '1,3' && <Directions />}
      <button className="restart-btn" type="button" onClick={restart}>Restart</button>
    </GameCard>
  )
}

export default GameScreen