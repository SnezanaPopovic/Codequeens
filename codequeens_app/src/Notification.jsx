function Notification({ type, message }) {
  if (type === "error") return <p style={{ color: "red" }}>{message}</p>;
  else if (type === "warning")
    return <p style={{ color: "orange" }}>{message}</p>;
  else if (type === "info") return <p style={{ color: "blue" }}>{message}</p>;
  else return <p>Nepoznata poruka</p>;
}

export default Notification;
