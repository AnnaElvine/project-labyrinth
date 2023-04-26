import React from 'react';
import { useSelector } from 'react-redux';
import { WelcomePage } from './WelcomePage'
import { GameScreen } from './GameScreen'

const StarterScreen = () => {

  
  <main>
      {userName === '' ? <WelcomePage /> : <GameScreen />}
    </main>e />
    </div>
  )
}

export default StarterScreen;