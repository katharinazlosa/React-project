import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo.png";

const headerLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

type HeaderProps = {
  toggleSidebar: () => void; //u zagradu pišemo samo ako trebamo neki data proslijediti
  onClose: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <>
      <div className="header__wrapper">
        <div className="header">
          <img
            className="header__logo"
            src={logo}
            onClick={toggleSidebar}
          ></img>

          <nav className="header__nav">
            {headerLinks.map((link) => {
              return (
                <>
                  <NavLink to={link.path} className={"header__nav__link"}>
                    {link.label}
                  </NavLink>
                </>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
