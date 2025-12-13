// function Hobbies() {
//   return (
//     <div>
//       <h3>Hobiji:</h3>
//       <ul>
//         <li>odbojka</li>
//         <li>citanje</li>
//         <li>putovanja</li>
//       </ul>
//     </div>
//   );
// }
import React, { useState } from "react";

function Hobbies() {
  const [hobbies, setHobbies] = useState(["reading", "gaming"]);
  const [noviHobby, setNoviHobby] = useState("");
  const [greska, setGreska] = useState("");

  function addHobby() {
    const prazanInput = noviHobby.trim();

    if (prazanInput === "") {
      setGreska("Please enter a hobby");
      return;
    }

    if (hobbies.includes(prazanInput)) {
      setGreska("That hobby already exists!");
      return;
    }
    setHobbies([...hobbies, prazanInput]);
    setNoviHobby("");
    setGreska("");
  }
  return (
    <div>
      <h2>Hobbies:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
      <input
        type="text"
        value={noviHobby}
        onChange={(e) => setNoviHobby(e.target.value)}
        placeholder="Unesite novi hobby"
      />{" "}
      <br /> <br />
      <button onClick={addHobby}>Add Hobby</button>
      {greska && <p style={{ color: "red" }}>{greska}</p>}
    </div>
  );
}

export default Hobbies;
