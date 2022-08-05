import SearchBar from "./SearchBar"
import SearchRes from "./SearchRes"
import logo from "../../assets/noBGlogo.png"
import cdReadOut from "../../assets/cdVoice.mp3"
import "./searched.css"

// This is the page with all the search results
function Searched ({search, setSearch}) {
    const cdAudio = new Audio(cdReadOut);
    const searchResults = [
        <SearchRes key="1" name="Code or die" link="/code-or-die" 
        description="having twoubwe m-meeting those assignment deadwines (o_O)? n-nowt abwe tuwu get ovew the ovewwhewming p-pwessuwes of faiwuwe awnd the numbness o-of success (o_O)? code ow die tuwns youw p-pwocwastination intwo a-action b-by giving u-uwu onwy two o-options: code *:･ﾟ✧*:･ﾟ✧  ow die〜☆ "
        audio = {cdAudio}/>
        
    ];

    /*Incomplete function for ordering search results */
    function orderRes (array, search) {
        return array;
    }
    
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