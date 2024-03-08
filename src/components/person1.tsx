import { useState } from "react";
export default function Person1() {
  let [person, setPerson] = useState({
    name: "khushi",
    age: 19,
  });
  const handleIncrement = () => {
    setPerson({ ...person, age: person.age + 1 });
  };
  const handleDecrement = () => {
    setPerson({ ...person, age: person.age - 1 });
  };
  const handleNameChange = (e) => {
    e.target.keycode;
    setPerson({ ...person, name: e.target.value });
  };
  return (
    <div className=" p-5">
      <h2>Welcome to Person !</h2>
      <input
        type="text"
        value={person.name}
        onChange={handleNameChange}
        className=" border-cyan-600 border"
      />
      <h2>name:{person.name}</h2>
      <h2>age:{person.age}</h2>
      <button onClick={handleIncrement}> Increment</button>
      <br />
      <button onClick={handleDecrement}> Decrement</button>
    </div>
  );
}
