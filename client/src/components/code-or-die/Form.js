// Skye

// The home page form. Bam. 
import {useNavigate} from 'react-router-dom'
const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="formCD">
      <p> this is the actual form!!</p>
      
      <button onClick={() => {
                navigate("examples")
                }}
                >Take me there</button>
      
    </div>
  )
}

export default Form