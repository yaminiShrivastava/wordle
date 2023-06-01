import React, { useCallback,useContext, useEffect } from 'react'
import {AppContext} from '../App'
import Keys from './Keys'
import './Keyboard.css'
function Keyboard() {
  const {onLetter,onDelete,onEnter}=useContext(AppContext);
  const key1=['Q','W','E','R','T','Y','U','I','O','P']
  const key2=['A','S','D','F','G','H','J','K','L']
  const key3=['Z','X','C','V','B','N','M']

  const handleKeyboard=useCallback((e)=>{
    if(e.key==='Enter'){
      onEnter();
    }else if(e.key==='Backspace'){
      onDelete();
    }else{
      key1.map((ky)=>{
        if(e.key.toLowerCase()===ky.toLowerCase()){
          onLetter(ky);
        }
        return 0;
      })
      key2.map((ky)=>{
        if(e.key.toLowerCase()===ky.toLowerCase()){
          onLetter(ky);
        }
        return 0;
      })
      key3.map((ky)=>{
        if(e.key.toLowerCase()===ky.toLowerCase()){
          onLetter(ky);
        }
        return 0;
      })
    }
  })



  useEffect(()=>{
    document.addEventListener('keydown',handleKeyboard);
    return ()=>{
      document.removeEventListener('keydown',handleKeyboard);
    }
  },[handleKeyboard])


  return (
    <div className='keyboard'>
      <div className='line1 '>
        {
      key1.map((e,ind)=>{
        return <Keys keyval={e} bigKey={false} key={ind}/>
      })}
      </div>
      <div className='line2 '>{key2.map((e,ind)=>{
        return <Keys keyval={e} bigKey={false} key={ind}/>
      })}</div>
      <div className='line3 '>
      
      <Keys keyval="ENTER" bigKey={true}/>
      {key3.map((e,ind)=>{
        return <Keys keyval={e} key={ind} bigKey={false}/>
      })}
      <Keys keyval='DELETE' bigKey={true}/>
      </div>
      
    </div>
  )
}

export default Keyboard
