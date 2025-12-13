import React, { useState, useEffect } from "react";

function FakeApiCall() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Simulacija API poziva pokrenuta");

    const timeout = setTimeout(() => {
      setData({ message: "Podaci uspešno ucitani!" });
      setLoading(false);
      console.log("Simulacija API poziva zavrsena");
    }, 3000);

    return () => {
      clearTimeout(timeout);
      console.log("Simulacija API poziva prekinuta");
    };
  }, []);

  return (
    <div>
      <h2>6.Simulacija API poziva</h2>
      {loading && <p>Ucitavanje podataka...</p>}
      {data && <p>{data.message}</p>}
    </div>
  );
}
export default FakeApiCall;
