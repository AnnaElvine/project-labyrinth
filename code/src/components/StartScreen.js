import React from 'react';
import { useSelector } from 'react-redux';
import { WelcomePage } from './WelcomePage'
import { GameScreen } from './GameScreen'

 => {}  const userName = useSelector((store) => store.labyrinth.userName)

  return (  
  <main>
      {userName === '' ? <WelcomePage /> : <GameScreen />}
    </main>
  )
}

export default StarrScreen;