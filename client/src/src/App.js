import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState} from "react"
//Components
import Searched from "./components/Searched.js"
import Home from "./components/Home.js";
import CodeOrDie from "./components/CodeOrDie"

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>    
      {/*I left the nav and footer elements empty to remind us 
      that we can fill these in and have them in every page of our app if we want */}  
      <nav></nav>

      <Routes>
        <Route path="/search" element={<Searched search={search} setSearch = {setSearch}/>} />
        <Route path="/codeOrDie" element={<CodeOrDie />} />
        <Route path="/" element={<Home setSearch={setSearch} search={search}/>} />
        
      </Routes>
      <footer></footer> 
    </Router>
  );
}

export default App;
