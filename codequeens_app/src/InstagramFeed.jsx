import { useState, useEffect } from "react";

function InstagramFeed() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
      fetch("https://jsonplaceholder.typicode.com/comments").then((r) =>
        r.json()
      ),
    ])
      .then(([users, posts, comments]) => {
        console.log("Users:", users);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
      })
      .catch((err) => console.error("Error:", err));
  });

  return <div></div>;
}

export default InstagramFeed;
