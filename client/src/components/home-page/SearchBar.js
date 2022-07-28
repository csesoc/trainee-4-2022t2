import searchIcon from "../../assets/noBGglass.png"
import {useNavigate} from 'react-router-dom'

const SearchBar = ({setSearch, search}) => {
    const navigate = useNavigate();
    
    const submit = e =>{
        if (search !== ""){
            navigate("/search");
        }
    }

    const allowEnterSubmit = e => {
        if ((search !== "") && (e.key === 'Enter')){
            submit();
        }
    }
    return (
        <div className="SearchBar">
            <img className="search-icon" src={searchIcon} alt="search icon"/>
            <input className="input" value={search} 
            onKeyPress={allowEnterSubmit}
            onChange={(e) => setSearch(e.target.value ? e.target.value : "")} 
            type="search" placeholder="Search for a fix..." required/>
            <button onClick={submit}>Search</button>
            
        </div>
    )
}

export default SearchBar
