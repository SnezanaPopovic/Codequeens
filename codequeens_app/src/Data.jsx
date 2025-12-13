import React from "react";

const Data = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    console.log(`resourse: ${resourceType}`);
    fetch(`"https://jsonplaceholder.typicode.com" ${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <p>{resourceType}</p>
    </div>
  );
};

export default Data;
