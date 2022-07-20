import QuestionTab from "./QuestionTab"
import CodeBox from "./CodeBox"
import {Link} from "react-router-dom"
//this is the little menu with the three tabs: code, examples, and assumptions

//Each tab needs the button's functions and the question and difficulty variables
const Menu = ({timeTilDel, toDel, examples, assumptions, stop, run, pause}) => {
  return (
    <div>
        <Link to ="">Code</Link>
        <Link to ="">Examples</Link>
        <Link to ="">Assumptions and Constraints</Link>
        <QuestionTab tabContent={<CodeBox timeTilDel={timeTilDel} toDel={toDel}/>} stop={stop} run={run} pause={pause} />
        <QuestionTab tabContent={<p>{examples}</p>} stop={stop} run={run} pause={pause} />
        <QuestionTab tabContent={<p>{assumptions}</p>} stop={stop} run={run} pause={pause} />
    </div>
  )
}

export default Menu
