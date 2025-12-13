import { useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    name: "Ajsa",
    age: 21,
  });

  //   const changeAge = () => {
  //     setUser({
  //       ...user,
  //       age: 22,
  //     });
  //   };

  //   const changeAge = () => {
  //     setUser((prevValue) => ({
  //       ...prevValue,
  //       age: 22,
  //     }));
  //   };

  const changeAge = () => {
    setUser((prevValue) => ({
      ...prevValue,
      age: prevValue.age + 1,
    }));
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <button onClick={changeAge}>Change age</button>
    </div>
  );
};

export default User;
