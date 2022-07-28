import Form from "./Form"
import QuestionTab from "./QuestionTab.js"
import {useState} from "react"
import {Route, Routes} from "react-router-dom"
import './code-or-die.css'
import CodeBox from "./CodeBox"


const CodeOrDie = () => {
  // needed to calculate the time for the question and stop the question if the 'pause' button is pressed
  const [time, setTime] = useState(0);
  const[running, setRunning] = useState(true);

  // these are the variables for the specific question
  const [examples, setExamples] = useState("example example");
  const [assumptions, setAssumptions] = useState("assumption heh");

  // variables for the specific difficulty
  const [timeTilDel, setTimeTilDel] = useState(2);
  const [toDel, setToDel] = useState(3);


  return (
    <Routes>
      <Route path="examples" element={<QuestionTab content={examples} time={time} setTime={setTime} running={running} setRunning={setRunning}/>} />
      <Route path="assumptions-and-constraints" element={<QuestionTab content={assumptions} time={time} setTime={setTime} running={running} setRunning={setRunning}/>} />
      <Route path="code" element={<QuestionTab content={<CodeBox timeTilDel={timeTilDel} toDel={toDel}/>} time={time} setTime={setTime} running={running} setRunning={setRunning}/>} />
      <Route path="" element={<Form />} />
    </Routes>

  )
}

export default CodeOrDie
