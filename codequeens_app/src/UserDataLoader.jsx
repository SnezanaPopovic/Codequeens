import { useState, useEffect } from "react";

function UserDataLoader() {
  const [user, setUser] = useState("Ana");

  useEffect(() => {
    console.log(`Ucitavam podatke za ${user}`);

    return () => {
      console.log(`cistim podatke za ${user}`);
    };
  }, [user]);

  return (
    <div>
      <h2>8.Cleanup</h2>
      <p>Trenutni korisnik: {user}</p>
      <button onClick={() => setUser("Ana")}>Ana</button>
      <button onClick={() => setUser("Marko")} style={{ marginLeft: "10px" }}>
        Marko
      </button>
      <button onClick={() => setUser("Sara")} style={{ marginLeft: "10px" }}>
        Sara
      </button>
    </div>
  );
}

export default UserDataLoader;
