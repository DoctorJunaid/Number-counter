import "./new.css" 
import { usestate, useState } from 'react'
function New(){ 
    let [counter , setCounter]= useState(0)
    function addition(){
        setCounter(counter+1)
        
    }
    function substraction(){
        if(counter>0){
        setCounter(counter-1)
    }
    }
    function reseter(){
        setCounter(0);
    }

    

    return (

        <>
        <div className="reset" onClick={reseter} id="reset">
        <span className="material-icons" id="reset_icon">refresh</span>
      </div>
      <h4>{counter}</h4>
      <div className="container">
      <button className="incree" onClick={addition}>+</button>
      <button className="decree" onClick={substraction}>-</button>
      </div>
      
        </>
    )
}
export default New