import searchIcon from "../assets/noBGglass.png"
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

const SearchBar = ({setSearch, search}) => {
    const navigate = useNavigate();

    return (
        <div className="SearchBar">
            <img className="search-icon" src={searchIcon} alt="search icon"/>
            <input className="input" value={search} 
            onChange={(e) => setSearch(e.target.value ? e.target.value : "")} 
            type="search" placeholder="Search for a fix..." required/>
            <button 
            onClick={() => {
                navigate("/search")
                }}
            >Search</button>
            
        </div>
    )
}

export default SearchBar
