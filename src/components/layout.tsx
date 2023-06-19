import { Outlet } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

const Layout = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  //koristiti useffect za provjeru umjesto console.log
  useEffect(() => {
    console.log(sidebar);
  }, [sidebar]);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} onClose={toggleSidebar} />
      <Outlet />
      <Sidebar isOpen={sidebar} onClose={toggleSidebar} />
    </>
  );
};

export default Layout;
