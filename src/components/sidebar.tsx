import { useState } from "react";
import IconMenu from "../assets/icons/iconmenu";
import Button from "./button";

type SidebarType = {
  toggleSidebar: () => void;
};

const Sidebar = ({ toggleSidebar }: SidebarType) => {
  return (
    <>
      <Button text="Open menu" color="green" onClick={toggleSidebar} />
      {sidebar ? (
        <div
          className="sidebar-box"
          // style={{width:25%, right:0}}
        >
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
