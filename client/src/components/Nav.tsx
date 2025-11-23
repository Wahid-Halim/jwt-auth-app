import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm justify-between">
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img src="pokemon_logo.png" alt="pokemon logo" className="w-10" />
        </Link>
        <div className="space-x-2">
          <Link to={"/register"} className="btn btn-outline btn-primary">
            Register
          </Link>
          <Link to={"/login"} className="btn btn-active btn-primary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
