import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";

  return (
    <div className={"containerNavbar"}>
      <Link to="/">JOYERIA SIVAK</Link>

      <ul className="categories">
        <Link to="/">Todas</Link>
        <Link to="/category/plata">Plata</Link>
        <Link to="/category/oro">Oro</Link>
      </ul>

      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}

      <CartWidget />
    </div>
  );
};

export default Navbar;
