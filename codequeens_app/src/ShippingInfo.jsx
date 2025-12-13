function ShippingInfo({ isMember, totalPrice }) {
  if (isMember && totalPrice > 500) return <p>Besplatna dostava</p>;
  return <p>Dostava se placa 300 dinara.</p>;
}

export default ShippingInfo;
