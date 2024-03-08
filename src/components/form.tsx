import { useState } from "react";

export default function Form() {
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastname(e.target.value);
  };

  return (
    <div className=" p-5 font-serif text-4xl">
      <h2>Let's check you in</h2>
      <h2>FirstName:</h2>
      <input
        type="text"
        value={firstname}
        onChange={handleFirstNameChange}
        className=" border-cyan-950 border"
      />
      <h2>LastName:</h2>
      <input
        type="text"
        value={lastname}
        onChange={handleLastNameChange}
        className=" border-cyan-950 border"
      />

      <h2>Your ticket will be issued to:{firstname + " " + lastname}</h2>
    </div>
  );
}
