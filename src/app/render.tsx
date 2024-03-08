import { useEffect, useState, useRef } from "react";
export default function Render() {
  let [count, setCount] = useState(0);
  //   let myref = useRef(null);
  //   let countref = useRef(0);
  useEffect(() => {
    console.log("useeffect is called");
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
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
      <p>Count : {count}</p>
      <input type="value" ref={myref} />
      {/* <button
        onClick={() => {
          countref.current += 1;
        }}
      >
        increment count Ref
      </button> */}
      {/* <p>Count Ref value : {countref.current}</p> */}
    </div>
  );
}
