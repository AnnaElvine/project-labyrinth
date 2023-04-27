import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionsGame } from 'reducers/game'

const Directions = () => {
  const actions = useSelector((store) => store.game.actions)
  const [isActive, setActive] = useState('false')

  const dispatch = useDispatch()

  const toggleDisplay = () => {
    setActive(!isActive);
  }

  return (
    <>
      <button className={isActive ? null : 'instructions-btn'} type="button" onClick={toggleDisplay}>Click here to see directions</button>
      {actions.map((action) => {
        return (
          <div className={isActive ? 'hidden-instructions' : 'instructions'}>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(actionsGame(action.type, action.direction))}> Go {action.direction}</button>
          </div>
        )
      })}
    </>
  )
}

export default Directions