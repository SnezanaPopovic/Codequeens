function ProfileCard({ ime, godine, hobiji }) {
  let hobijiContent;
  if (hobiji.length === 0) {
    hobijiContent = <p>Nema hobija</p>;
  } else if (hobiji.length > 3) {
    hobijiContent = <p>Previse hobija</p>;
  } else {
    hobijiContent = (
      <ul>
        {hobiji.map((hobi, index) => (
          <li key={index}>{hobi}</li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <h2>Ime: {ime}</h2>
      <p>Godine: {godine}</p>
      {hobijiContent}
      {godine > 30 && <p>Iskusan korisnik</p>}
    </>
  );
}

export default ProfileCard;
