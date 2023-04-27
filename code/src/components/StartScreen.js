/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { Dispatch } from 'react-redux';
import game from 'reducers/game.js';
/* import labyrinth, { startGame } from './reducers/game.js'; */
// import { useSelector } from 'react-redux';
/* import WelcomePage from './WelcomePage' */
/* import GameScreen from './GameScreen' */

const StartScreen = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(startGame(usernameInput))
  }
  return (
  // {userName === '' ? <WelcomePage /> : <GameScreen />}

    <div className="Start-box">
      <h1>The Game</h1>
      <p>hej hej hej hej</p>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="userName">
          <span>Username:</span>
          <br />
          <input
            type="text"
            id="userName"
            onChange={(event) => setUsernameInput(event.target.value)}
            value={usernameInput} />
        </label>
        <SubmitBtn
          type="submit">Submit
        </SubmitBtn>
      </form>
    </div>
  )
}

export default StartScreen;