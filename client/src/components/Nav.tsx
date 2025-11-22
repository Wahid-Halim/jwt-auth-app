// import { Link } from "react-router-dom";
// const Nav = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm">
//         <a className="btn btn-ghost text-xl">daisyUI</a>
//         <div>
//           <Link to={"/"}>Home</Link>
//           <Link to={"/login"}>Login</Link>
//           <Link to={"/register"}>Register</Link>
//           <Link to={"/cards"}>Cards</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>

      {token ? (
        <>
          <Link to="/pokemon">Pokémon Cards</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

