import React from 'react'
import './App.css'


// timer app without hooks
function App() 
{

  let timer = {
    "seconds" : 0
  }

  const intervalFunction=() => {
    timer.seconds = timer.seconds + 1 ;
    document.getElementById("timer").innerHTML = timer.seconds
    console.log(timer.seconds)
     }
    
     var interval = null;
  const handleStart =()=>{
    interval = setInterval(intervalFunction, 1000);
    console.log("start")
    console.log(timer.seconds)
  }
  
  const handleStop =()=>{
    clearInterval(interval)
    console.log("stop")
  }

  const handleRestart =()=>{
    timer.seconds = 0;
    console.log("Restart")
    document.getElementById("timer").innerHTML = timer.seconds
    console.log(timer.seconds)
  }

  return (
    <div className="full-container" >
    <div className="container">
    <div className="display-timer">
      <p>Timer : </p>
      <p id="timer">{timer.seconds}</p>
    </div>
      <div className="buttons">
        <button onClick={handleStart} disabled={false}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRestart}>Restart</button>
      </div>

      {/* {
        handleStart
        ?
        handleStart.disabled: true
        :
        handleStart.disabled: false 
      } */}

    </div>
    </div>
  )
}

export default App