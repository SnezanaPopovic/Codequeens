// // function Header() {
// //   return (
// //     <header>
// //       <h1>Dobrodosli na moju stranicu</h1>
// //     </header>
// //   );
// // }

// // export default Header;

// // import { Link } from "react-router-dom";

// // export default function Header() {
// //   return (
// //     <header style={{ padding: 20, display: "flex", gap: 20 }}>
// //       <Link to="/blogs">Blogs</Link>
// //     </header>
// //   );
// // }

// import { Link } from "react-router-dom";

// function Header() {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/products">Products</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// export default Header;

/**
 * Link - React Router komponenta za navigaciju
 *
 * Link je alternativa za obični <a> tag, ali:
 * - Ne osvežava stranicu (SPA - Single Page Application)
 * - Brža navigacija (samo menja komponente, ne učitava novu stranicu)
 * - Omogućava programsku navigaciju
 *
 * Razlika između <a> i <Link>:
 * - <a href="/blogs"> → osvežava stranicu (full page reload)
 * - <Link to="/blogs"> → ne osvežava stranicu (samo menja komponentu)
 */
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NasaKomponenta } from "./NasaKomponenta";
import { AuthContext } from "../context/AuthContext";

/**
 * Header - Navigaciona komponenta
 *
 * Ova komponenta prikazuje navigacione linkove.
 * Link komponenta omogućava navigaciju bez osvežavanja stranice.
 */
export default function Header({ nekiProp }) {
  // Iz AuthContext-a uzimamo user i logout da bismo prikazali stanje prijave
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header
      style={{
        padding: 20,
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
      }}
    >
      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        {/* 
          Link komponenta za navigaciju na "/blogs" rutu
          Kada korisnik klikne, React Router će prikazati BlogsContainer komponentu
          bez osvežavanja cele stranice
        */}
        <Link to="/blogs">
          <NasaKomponenta nekiProp={nekiProp}></NasaKomponenta>
        </Link>

        {/* Link ka login strani za neautentifikovane korisnike */}
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </div>

      {/* Prikaz korisnika i logout dugme ako je autentifikovan */}
      {isAuthenticated ? (
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ fontSize: 14, color: "#333" }}>
            Ulogovani kao: <b>{user?.email}</b>
          </span>
          <button onClick={logout} style={{ padding: "6px 10px" }}>
            Logout
          </button>
        </div>
      ) : null}
    </header>
  );
}
