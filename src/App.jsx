import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Login />
      <Signup />
      <Layout />
    </div>
  );
}

export default App;
