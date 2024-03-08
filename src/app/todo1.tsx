import { useState } from "react";
const btnStyle =
  "ml-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
const deleteBtnStyle =
  "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";

export default function Todo() {
  let [todos, setTodos] = useState([]);
  const handleTextchange = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value !== "") {
        setTodos([...todos, { text: e.target.value, isDone: false }]);
        e.target.value = "";
        e.target.focus();
      } else {
        alert("Please enter something");
      }
    }
  };
  const handleDoneClick = (i) => {
    const todoCopy = [...todos];
    todoCopy[i].isDone = !todoCopy[i].isDone;
    setTodos(todoCopy);
  };
  const handleDeleteClick = (i) => {
    const todoCopy = [...todos];
    todoCopy.splice(i, 1);
    setTodos(todoCopy);
  };
  return (
    <div className="  bg-lime-800 flex-1 justify-center">
      <h2 className=" font-serif  font-bold text-5xl ">Welcome to Todo !</h2>
      <input
        type="text"
        placeholder="What do you want ?"
        className="mt-8 text-3xl w-4/12 bg-white py-2 px-2 rounded-lg focus:outline-none placeholder:text-slate-400"
        onKeyDown={handleTextchange}
      />
      <TodoList
        todos={todos}
        handleDeleteClick={handleDeleteClick}
        handleDoneClick={handleDoneClick}
      />
    </div>
  );
}

function TodoList({ todos, handleDeleteClick, handleDoneClick }) {
  return (
    <div>
      {todos.map((todos, i) => (
        <div key={i}>
          <div className="m-3 flex flex-row justify-center items-center">
            <div>
              {i + 1} -{""}
              <span className={todos.isDone ? "line-through" : "no-underline"}>
                {todos.text}
              </span>
              <button
                className={btnStyle}
                onClick={() => {
                  handleDoneClick(i);
                }}
              >
                {todos.isDone ? "Undo" : "Done"}
              </button>
              <button
                className={deleteBtnStyle}
                onClick={() => {
                  handleDeleteClick(i);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
