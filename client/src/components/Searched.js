import SearchBar from "./SearchBar"
import SearchRes from "./SearchRes"
import logo from "../assets/noBGlogo.png"
import "../searched.css"

function Searched ({search, setSearch}) {
    const searchResults = [
        <SearchRes key="1" name="Code or die" link="/codeOrDie" description="TBA"/>

    ];

    /*Uncompleted function for ordering search results */
    function orderRes (array, search) {
        return array;
    }
    console.log(search);
    return(
        <div className="search-page">
            <header>
                <img className={logo} src ={logo} alt="uwugle logo"></img>
                <SearchBar search={search} setSearch = {setSearch}/>
            </header>
            <hr></hr>
            
            <div className="results">
                <p className="solNum">Exactly one result (0.42 seconds)</p> {/*exact number of apps is variable, of course*/}
                {(orderRes(searchResults, search))}
            </div>

        </div>
    )
    
}


export default Searched;