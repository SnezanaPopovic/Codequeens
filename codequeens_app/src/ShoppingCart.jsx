function ShoppingCart({ proizvodi }) {
  if (!proizvodi || proizvodi.length === 0) return <p>Korpa je prazna</p>;

  const ukupanIznos = proizvodi.reduce(
    (sum, proizvod) => sum + proizvod.cena,
    0
  );
  return (
    <ul>
      {ukupanIznos > 2000 && <p>Imas pravo na besplatnu dostavu</p>}
      {proizvodi.map((proizvod, index) => (
        <li key={index}>
          {proizvod.naziv} - {proizvod.cena} din
        </li>
      ))}
    </ul>
  );
}
export default ShoppingCart;
