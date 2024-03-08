import { useState } from "react";
export default function PersonComponent() {
  let [person, setPerson] = useState({
    name: "Khushi",
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
    <div className="p-4">
      <h2> Welcome to Person !</h2>
      <input
        type="text"
        value={person.name}
        onChange={handleNameChange}
        className=" border-cyan-700 border-2"
      />
      <h2>name:{person.name}</h2>
      <h2>age:{person.age}</h2>
      <button onClick={handleIncrement}>Increment age</button>
      <br />
      <button onClick={handleDecrement}> Decrement age</button>
    </div>
  );
}
