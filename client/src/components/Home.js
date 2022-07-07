import SearchBar from "./SearchBar.js";
import logo from "../assets/noBGlogo.png"
import '../index.css'
import {useEffect} from 'react'

function Home({setSearch, search}) {
  useEffect(() => {
    setSearch("");
  }, []);

  return (
    
    <div className="Home">

        <header>
        <img className="logo" src={logo} alt="app logo" />
        
        {/*Includes the search icon, the search bar, and the search button*/}
        <SearchBar setSearch={setSearch} search={search}/>
        
        </header>     
        
    </div>
    
  );
}

export default Home;
