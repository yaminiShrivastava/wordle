import React,{useContext} from 'react'
import {AppContext} from '../App'
function GameOver() {
    
  const {gameOver,correctWord,currAttempt}=useContext(AppContext);
  return (
    <div className='gameover'>
        {console.log('ohgod',gameOver)}
        <h3>{gameOver.guessed?'Congratulations You Win!!!!':'Lose!! Better Luck Next Time'}</h3>
        <h1>correct word is {correctWord}</h1>
        {gameOver.guessed && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver
