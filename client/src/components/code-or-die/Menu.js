import {Link} from "react-router-dom"
import {useState} from "react"
//this is the little menu with the three tabs: code, examples, and assumptions

//Each tab needs the button's functions and the question and difficulty variables
const Menu = () => {
  const [toggleState, setToggleState] = useState("examples");

  const toggleTab = (index) => {
    setToggleState(index);
  };

  

  return (
    <div className="menuCD">
      <Link to="../examples"
        className={toggleState === "examples" ? "active-tab" : ""}
        onClick={() => toggleTab("examples")}
        >Examples</Link>
      
      <Link to="../assumptions-and-constraints"
        className={toggleState === "assump" ? "active-tab" : ""}
        onClick={() => toggleTab("assump")}
        >Assumptions and Constraints</Link>
      
      <Link to="../code"
      className={toggleState === "code" ? "active-tab" : ""}
      onClick={() => toggleTab("code")}
      >Code</Link>
      
        
    </div>
  )
}

export default Menu
