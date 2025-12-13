// function UserList({ users }) {
//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>
//           {user.name} ({user.age})
//         </li>
//       ))}
//     </ul>
//   );
// }

function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p>Nema korisnika u listi</p>;
  }
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.godine >= 18 ? "punoletan" : "maloletan"}</li>
      ))}
    </ul>
  );
}

export default UserList;
