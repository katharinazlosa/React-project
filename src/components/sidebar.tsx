import { NavLink } from "react-router-dom";
import IconMenu from "../assets/icons/iconmenu";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

type LinkListType = {
  path: string;
  label: string;
};

const linkList: LinkListType[] = [
  {
    path: "/progress-bar",
    label: "Progress bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      <div className={`sidebar sidebar--${isOpen ? "isActive" : ""}`}>
        <h3 className="sidebar__title">Menu</h3>
        {linkList.map((link) => {
          return (
            <NavLink
              key={link.path}
              className="sidebar__link"
              onClick={onClose}
              to={link.path}
            >
              {link.label}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
