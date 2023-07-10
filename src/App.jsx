import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Layout from "./components/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="app">
      <Login />
      <Signup />
      <Layout />
    </div>
  );
}

export default App;
