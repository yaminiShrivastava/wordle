import React,{useContext} from 'react'
import {AppContext} from '../App'
function Keys({keyval,bigKey}) {

    
    const {onLetter,onDelete,onEnter}=useContext(AppContext);
    const selectLetter=()=>{
        if(keyval==='ENTER'){
            onEnter()
        }else if(keyval==="DELETE"){
            onDelete()
        }else{
            onLetter(keyval)
        }

    }
  return (
    <div className={bigKey===true?'key big':'key'} onClick={selectLetter}>
        <div className='mainKey'>{keyval}</div>
    </div>
  )
}

export default Keys
