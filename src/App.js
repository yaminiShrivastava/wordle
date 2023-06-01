import { createContext,useEffect,useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault,generateWordSet } from './components/Words';
import GameOver from './components/GameOver';

export const AppContext=createContext()
function App() {

  const correctWord='ABASE'
  const [board,setBoard]=useState(boardDefault)
  const [currAttempt,setCurrAttempt]=useState({
    attempt:0,
    letterPos:0
  })
  const [gameOver,setGameOver]=useState({
    gmOver:false,
    guessed:false,
  })
  const [wordSet,setWordSet]=useState(new Set());

  const onEnter=(keyval)=>{
    
    if(currAttempt.letterPos>6)return
    let currWord="";
    for(let i=0;i<5;i++){
      currWord+=board[currAttempt.attempt][i];
    }
    currWord+='\r';
    // console.log(currWord)
    // console.log(correctWord)
    // console.log(wordSet)
    if(wordSet.has(currWord.toLowerCase())){
      setCurrAttempt({letterPos:0,attempt:currAttempt.attempt+1})
    }else{
      alert("Wrong word!!!");
      // return;
    }

    currWord=currWord.substring(0,currWord.length-1);
    // console.log(currWord)
    // console.log(correctWord)
    // console.log(correctWord===currWord)
    if(currWord.toLowerCase()===correctWord.toLowerCase()){
      setGameOver({gmOver:true,guessed:true})
    }
    // console.log('hey')
    if(currAttempt.attempt===5){
      setGameOver({gmOver:true,guessed:false})
    }

  }
  const onDelete=()=>{
    
    if(currAttempt.letterPos<=0)return;
    const nBoard=[...board];
    nBoard[currAttempt.attempt][currAttempt.letterPos-1]='';
    setBoard(nBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1})
  }

  const onLetter=(keyval)=>{
    
    if(currAttempt.letterPos>5)return
    const newBoard=[...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos]=keyval;
    setBoard(newBoard);
    
 setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1})
  }
  useEffect(()=>{
    generateWordSet().then((words)=>{
      setWordSet(words.wordSet)
      // console.log(words.wordSet)
    })
  },[])
  return (
    <>
    <div className='navbar'>Wordle</div>
    <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onEnter,onLetter,onDelete,correctWord,gameOver,setGameOver}}>
      <div className='flex'>
      <Board/>
      {gameOver.gmOver?<GameOver/>:<Keyboard/>}  
      </div>
    </AppContext.Provider>
    </>
  );
}

export default App;
