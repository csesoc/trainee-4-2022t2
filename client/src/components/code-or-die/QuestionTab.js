//Marian
import Question from "./Question"
import TimeElapsed from "./TimeElapsed"
import Button from "./Button"
import Header from "./Header"
import Menu from "./Menu"

const QuestionTab = ({examples, assumptions, tabContent, stop, run, pause, currTime, changeTime}) => {
    /*tabContent will either be a paragraph element with the given text or a CodeBox element*/
    
    return (
    <div>
        <Header />
        <Menu examples={examples} assumptions={assumptions} stop={stop} run={run} pause={pause}/>
        <Button purpose={stop} sign="Stop"/>
        <Question />
        {tabContent} 
        <Button purpose={run} sign="Run"/>
        <Button purpose={pause} sign="Pause" currTime={currTime} changeTime={changeTime}/>
        <TimeElapsed currTime={currTime} changeTime={changeTime}/>
    </div>
  )
}

export default QuestionTab
