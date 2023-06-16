import { useState } from "react";
import IconMenu from "../assets/icons/iconmenu";
import Button from "./button";

// type SidebarType = {
//   toggleSidebar: () => void;
// };

const Sidebar = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <Button text="Open menu" color="green" onClick={toggleSidebar} />
      {sidebar ? (
        <div className="sidebar-box">
          <h3 className="sidebar-box__title">
            <IconMenu />
            Menu
          </h3>
          <a href="#" className="sidebar-box__link">
            Customers
          </a>
          <a href="#" className="sidebar-box__link">
            Products
          </a>
          <a href="#" className="sidebar-box__link">
            Categories
          </a>
          <Button text="Close" color="red" onClick={toggleSidebar} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
