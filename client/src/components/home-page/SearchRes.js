import {Link} from "react-router-dom"

// This component is for each search result- as in the apps that we add
const SearchRes = ({name, description, link}) => {
    return (
      <div className="SearchRes">
              <Link to={link}>
                <h2>{name}</h2>
              </Link>
        
          <p>{description}</p>
      </div>
    )
  }
  
  export default SearchRes
  