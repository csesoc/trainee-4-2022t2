//Marian
import Question from "./Question"
import TimeElapsed from "./TimeElapsed"
import Button from "./Button"
import Header from "./Header"
import Menu from "./Menu"
import { useEffect, useState } from "react"

// A question tab is either the 'code', 'examples', or 'assumptions and constraints' tab where you actually do the coding
const QuestionTab = ({content, time, setTime, running, setRunning}) => {
    /*the content variable will either be a paragraph element with the given text or a CodeBox element*/  

    // Marian- I haven't tested this 'pause' function
    function pause (sign, running, setRunning) {
      setRunning(!running);
      if (running){
        sign = "Pause";
      }
      else if (!running){
        sign = "Unpause";
      }
      return;
    }
  
    function stop () {
      return;
    }
  
    function run () {
      return;
    }

    return (
    <div className="questionTabCD">
        <Header />
        <div className="topOfTab">
          <div className="topOfTop">
            <Menu />
            <Button purpose={stop} sign='Stop'/>
          </div>
          <Question />
          {content}
        </div>

        <div className="bottomOfTabCD">
          <Button purpose={run} sign='Run'/>
          <Button purpose={pause} sign='Pause' time={time} setTime={setTime} setRunning ={setRunning}/>
          <TimeElapsed time={time} setTime={setTime} running={running}/>
        </div>
    </div>
  )
}

export default QuestionTab
