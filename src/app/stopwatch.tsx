import { useState, useEffect } from "react";
import { BlueButton } from "../components/my-tailwind-styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Page() {
  let [isPause, setIsPause] = useState(false);
  let [takeLap, setTakeLap] = useState(false);
  let [laps, setLaps] = useState([]);
  let [reset, setReset] = useState(false);
  const handlePaused = () => {
    setIsPause(!isPause);
  };
  const handleLap = () => {
    if (isPause) {
      alert("sorry can't take lap while pause");
    } else {
      setTakeLap(true);
    }
  };

  const getLap = (lapValue) => {
    console.log(lapValue);
    setTakeLap(false);
    setLaps([lapValue, ...laps]);
  };

  const handleReset = () => {
    if (!isPause) {
      alert("sorry can't reset while running");
    }
    setLaps([]);
    setTakeLap(false);
    setReset(true);
    setTimeout(() => {
      setReset(false);
    }, 100);
  };
  return (
    <div className="bg-green-800 text-center">
      <div className="flex justify-center">
        <Ionicons name="stopwatch-outline" size={32} />
        <h2 className=" flex  justify-center font-mono font-bold text-3xl">
          STOPWATCH
        </h2>
      </div>

      <button onClick={handlePaused} className={BlueButton}>
        {" "}
        {isPause ? " Resume " : " Pause "}
      </button>
      <button onClick={handleLap} className={BlueButton}>
        Lap
      </button>
      <button onClick={handleReset} className={BlueButton}>
        Reset
      </button>

      <StopWatch
        isPause={isPause}
        takeLap={takeLap}
        getLap={getLap}
        reset={reset}
      />
      <LapList laps={laps} />
    </div>
  );
}
function convertMillisecond(n: number) {
  let ms = n * 100;
  //calculate minutes
  const min = Math.floor(ms / 60000);
  //calculate remaining miliseconds after removing minutes
  const remainingMs = ms % 60000;
  //calculate second
  const sec = Math.floor(remainingMs / 1000);
  //calculate remaining miliseconds after removing seconds
  const remainingMs2 = remainingMs % 1000;

  return {
    m: min,
    s: sec,
    ms: remainingMs2,
  };
}
function StopWatch({ isPause, takeLap, getLap, reset }) {
  let [value, setValue] = useState(0);

  useEffect(() => {
    let interval = null;
    if (!isPause) {
      interval = setInterval(() => {
        let v = value + 1;
        setValue(v);
      }, 100);
    }
    if (reset) {
      clearInterval(interval);
      setValue(0);
    }

    return () => {
      clearInterval(interval);
    };
  }, [value, isPause, reset]);

  useEffect(() => {
    console.log("lap useffect fired.");
    if (takeLap) {
      getLap(value);
    }
  }, [, getLap, takeLap]);

  let time = convertMillisecond(value);
  return (
    <div>
      <h2 className="flex justify-center bg-yellow-200 text-amber-950 text-3xl font-sans font-bold">
        Time :{time.m}:{time.s}:{time.ms / 10}
      </h2>
    </div>
  );
}
function LapList({ laps }) {
  let count = laps.length + 1;
  return (
    <div>
      {laps.map((lap, i) => {
        const m = convertMillisecond(lap);
        const laptime = convertMillisecond(lap - (laps[i + 1] || 0));
        return (
          <h2 key={i} className="bg-yellow-400">
            {(count = count - 1)} - laptime: {laptime.m} : {laptime.s} :
            {laptime.ms / 10} -------- Totaltime: {m.m}: {m.s}:{m.ms / 10}
          </h2>
        );
      })}
    </div>
  );
}
