// Marian
import {useState, useEffect} from "react"

//timeTilDel and toDel are adjustable according to difficulty 
const CodeBox = ({timeTilDel, toDel}) => {
  const [code, setCode] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect((code, counter, timeTilDel, toDel) => {
    const interval = setInterval(() => {
      setCounter(counter + 1); //when a second passes, I add one to this counter
    
      //if the counter reaches untilDel, then remove exactly toDel chars from code
      if (counter === timeTilDel){
        code.substring(0, code.length - toDel);
        setCounter(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //when code in the codeBox changes, then update the code variable to its new value and bring the doom counter back to 0 
  function textChanged (value) {
    if (value){
      setCode(value);
    }
    else{
      setCode("");
    }
    setCounter(0);
  }

  return (
    <div className="timeElapsedCD">
      <input type="text" value={code} onChange={textChanged(this.target.value)}></input>
    </div>
  )
}

export default CodeBox
