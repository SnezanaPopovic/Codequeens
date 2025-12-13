const ProductCard = (props) => {
  console.log(props);

  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
      {!props.inStock && <p style={{ color: "red" }}>Nije na stanju</p>}
    </div>
  );
};

export default ProductCard;
