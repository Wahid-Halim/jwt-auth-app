import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <a className="btn btn-ghost text-xl">daisyUI</a>
        <div>
          <Link className="btn btn-ghost text-xl" to={"/"}>
            Home
          </Link>
          <Link to={"/login"} className="btn btn-ghost text-xl">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-ghost text-xl">
            Register
          </Link>
          <Link to={"/pokemon-cards"} className="btn btn-ghost text-xl">
            Cards
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
