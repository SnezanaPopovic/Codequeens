import { useState } from "react";

function Button({ onClick }) {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  count[(count, setCount)] = useState(0);

  const handleClick = () => {
    console.log("CLicked");
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Button onClick={handleClick} />
    </div>
  );
}

export default Parent;
