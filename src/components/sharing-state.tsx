import { useState } from "react";

export default function Accordion() {
  const [aboutVisibility, setAboutVisibility] = useState(false);
  const [etymologyVisibility, setEtymologyVisibility] = useState(false);

  const handleAboutVisibility = () => {
    setAboutVisibility(!aboutVisibility);
    setEtymologyVisibility(false);
  };

  const handleEtymologyVisibility = () => {
    setEtymologyVisibility(!etymologyVisibility);
    setAboutVisibility(false);
  };
  return (
    <div>
      <h2 className=" p-6 font-serif text-3xl">Almaty, Kazakhstan</h2>
      <h2 className=" p-3 font-serif text-2xl">About</h2>
      <button
        className="p-4 border border-y-cyan-950"
        onClick={handleAboutVisibility}
      >
        {aboutVisibility ? "Hide" : "Show"}
      </button>

      {aboutVisibility && (
        <h2 className=" p-4 ">
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </h2>
      )}
      <hr />
      <h2 className=" p-3 font-serif text-2xl">Etymology</h2>
      <button
        className="p-4 border border-y-cyan-950"
        onClick={handleEtymologyVisibility}
      >
        {etymologyVisibility ? "Hide" : "Show"}
      </button>
      {etymologyVisibility && (
        <h2 className=" p-4 ">
          The name comes from алма, the Kazakh word for "apple" and is often
          translated as "full of apples". In fact, the region surrounding Almaty
          is thought to be the ancestral home of the apple, and the wild Malus
          sieversii is considered a likely candidate for the ancestor of the
          modern domestic apple.
        </h2>
      )}
    </div>
  );
}
