import { useState, useEffect } from "react";
export default function SetClock() {
  let [count, setCount] = useState(0);
  let [clockVisibility, setClockVisibility] = useState(true);
  let [clockPause, setClockPause] = useState(false);
  const removeclock = () => {
    setClockVisibility(!clockVisibility);
  };
  const handlePause = () => {
    setClockPause(!clockPause);
  };
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("render is called");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <p>Count :{count}</p>
      <button onClick={removeclock}>Remove clock</button>
      <button onClick={handlePause}>Pause</button>
      {clockVisibility && <Clock isPaused={clockPause} />}
    </div>
  );
}
function Clock({ isPaused }) {
  let [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("useeffect is called");
    let interval = null;
    console.log(isPaused);
    if (!isPaused) {
      interval = setInterval(() => {
        console.log("interval is called");
        setTime(new Date());
      }, 1000);
    }

    return () => {
      console.log("cleanup executed");
      clearInterval(interval);
    };
  }, [isPaused]);

  return (
    <div>
      <h2>Time:{time.toLocaleTimeString()}</h2>
    </div>
  );
}
