import {Link} from "react-router-dom"
//this is the little menu with the three tabs: code, examples, and assumptions

//Each tab needs the button's functions and the question and difficulty variables
const Menu = () => {
  return (
    <div className="menuCD">
        <Link to="../code">Code</Link>
        <Link to="../examples">Examples</Link>
        <Link to="../assumptions-and-constraints">Assumptions and Constraints</Link>
        
    </div>
  )
}

export default Menu
