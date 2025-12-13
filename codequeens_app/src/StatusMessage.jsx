function StatusMessage({ status }) {
  if (status === "loading") return <p>Ucitavanje</p>;
  else if (status === "error")
    return <p style={{ color: "red" }}>Doslo je do greske</p>;
  else if (status === "success")
    return <p style={{ color: "green" }}>Uspesno ucitano</p>;
  else return <p>Nepoznat status</p>;
}

export default StatusMessage;
