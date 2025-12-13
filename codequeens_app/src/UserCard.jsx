// function UserCard(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <p>{props.age}</p>
//     </div>
//   );
// }
function UserCard({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
export default UserCard;
