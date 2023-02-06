import { Link } from "react-router-dom";
import logo from "../logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="cocktail logo"></img>
      </Link>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cocktail/:id">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
