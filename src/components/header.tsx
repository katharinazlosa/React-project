import { NavLink } from "react-router-dom";
import logo from "./../assets/icons/logo.png";

const Header = () => {
  return (
    <>
      <div className="header__wrapper">
        <div className="header">
          <img className="header__logo" src={logo}></img>
          <nav className="header__nav">
            <NavLink to="/" className={"header__nav__link"}>
              Home
            </NavLink>
            <NavLink to="/contact" className={"header__nav__link "}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
