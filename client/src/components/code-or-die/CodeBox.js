// Marian
import {useState, useEffect} from "react"

//timeTilDel and toDel are adjustable according to difficulty 
const CodeBox = ({timeTilDel, toDel}) => {
  const [code, setCode] = useState("code");
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
      //if the counter reaches untilDel, then remove exactly toDel chars from code
      
      if (counter >= timeTilDel && code.length >= toDel){
        setCode(code.substring(0, code.length - toDel));
      }}
    , 1000);
    
    return () => {clearInterval(interval)};
  });

  
  return (
    <div className="codeBoxCD">
      <p>Start Coding...</p>
    
      <textarea value={code} 
      //when code in the codeBox changes, then update the code variable to its new value and bring the doom counter back to 0 
      onChange={(e) => {
        setCode(e.target.value ? e.target.value : "");
        setCounter(0);}
      }
      
      ></textarea>
      
    </div>
  )
}

export default CodeBox
