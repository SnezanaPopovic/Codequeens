import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const [name, setName] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeInputvalue = (e) => {
    setUser((prevValue) => ({
      ...prevValue,
      [e.target.value]: e.target.value,
    }));
  };
  return (
    <div>
      <label htmlFor="ime">Ime: </label>
      <input
        type="text"
        name="name"
        onChange={(event) => {
          changeInputvalue(event);
        }}
        value={user.name}
      />
      <br />
      <label htmlFor="surname">Prezime: </label>
      <input
        type="text"
        name="surname"
        onChange={(event) => {
          changeInputvalue(event);
        }}
        value={user.surname}
      />
      <br />
      <label htmlFor="email">E-mail: </label>
      <input
        type="text"
        name="email"
        onChange={(event) => {
          changeInputvalue(event);
        }}
        value={user.email}
      />

      <p>
        Vrednost name: {user.name}, Vrednost surname: {user.surname}, Vrednost
        email:
        {user.email}
      </p>
    </div>
  );
};

export default Form;
