import {Link} from "react-router-dom"
import {useState} from "react"
import Microphone from "../../assets/microphone.png"

// This component is for each search result- as in the apps that we add
const SearchRes = ({name, description, link, audio}) => {
    const [playing, setPlaying] = useState(false);

    const pressMic = () => {
      if (playing){
        audio.pause();
      }
      else{
        audio.play();
      }
      setPlaying(!playing);
    }

    return (
      <div className="SearchRes">
          <div className="resultInfo">
            <Link to={link}>
              <h2>{name}</h2>
            </Link>
        
            <p>{description}</p>
          </div>

          <div className="resultSound">
            <button onClick={pressMic}><img alt="microphone" src={Microphone}></img></button>
          </div>
      </div>
    )
  }
  
  export default SearchRes
  