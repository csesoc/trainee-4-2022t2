import Form from "./Form"
import QuestionTab from "./QuestionTab"
import {useState} from "react"
import {Route, Routes} from "react-router-dom"
import './code-or-die.css'

const CodeOrDie = () => {
  const [time, setTime] = useState(new Date().getTime());

  return (
    <Routes>
      <Route path="" element={<Form />} />
    </Routes>

  )
}

export default CodeOrDie
