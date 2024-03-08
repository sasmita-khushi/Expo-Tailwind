export default function Quiz() {
  return (
    <div>
      <h2 className=" p-4 text-3xl  font-serif">City quiz</h2>
      <h2 className=" p-5">
        In which city is there a billboard that turns air into drinkable water?
        <hr />
        <input type="text" className=" border-cyan-900 border" />
        <hr />
        <button>Submit</button>
      </h2>
    </div>
  );
}
