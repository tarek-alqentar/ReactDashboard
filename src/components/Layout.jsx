import Home from "./Home";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import "../assets/layout.css";

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
