import Home from "./Home";
import Navbar from "./Navbar";

import "../assets/layout.css";
import Sidebar from "../Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar />
      <Home />
    </div>
  );
};

export default Layout;
