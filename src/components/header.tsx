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
  {
    path: "/animals",
    label: "Animals",
  },
  {
    path: "/lotr",
    label: "Lotr",
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
                <div key={link.label}>
                  <NavLink to={link.path} className={"header__nav__link"}>
                    {link.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
