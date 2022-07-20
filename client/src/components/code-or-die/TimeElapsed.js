// Marian
import { useEffect } from 'react';

const TimeElapsed = ({time, setTime}) => {
 
  setTime(time + new Date().getTime());

  useEffect((setTime) => {
    const interval = setInterval(() => {
      setTime(time + new Date().getTime());
    }, 1000)

    return () => clearInterval(interval);
  }, [time]);

  return getReturnValues(time);
};

const getReturnValues = (counter) => {
  // calculate time
  const hours = Math.floor(
    (counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((counter % (1000 * 60)) / 1000);

  return (
    <div className="timerCD">
        <p> {hours} : {minutes} : {seconds} </p>
    </div>
  )
};

export default TimeElapsed