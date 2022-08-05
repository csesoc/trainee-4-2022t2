// Marian
import { useEffect, useState } from 'react';

const TimeElapsed = ({time, setTime, running}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //update the time every second
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }

     // calculate time in hours, minutes, and seconds
    setHours(Math.floor((time/ 3600) % (60 * 60 * 60)));
    setMinutes(Math.floor((time / 60) % 60));
    setSeconds(Math.floor(time % 60));

    return () => clearInterval(interval);
  }, [running, setTime, time]);

 
  return (
    <div className="timerCD">
        <p>Time elapsed: </p> 
        <p>{hours > 9 ? hours : '0' + hours} : {minutes > 9 ? minutes : '0' + minutes} : {seconds > 9 ? seconds : '0' + seconds} </p>
    </div>
  )
  
};


export default TimeElapsed
