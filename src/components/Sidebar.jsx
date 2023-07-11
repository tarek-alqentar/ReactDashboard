

import React, { useState } from "react";
import "../Sidebar.css";
import profilepic from "../assets/profilepic.png";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`sidebar ${isCollapsed ? "collapsed" : ""} sidebarbg`}>
        <h2>Vertical Nav</h2>
        <img src={profilepic} className="rounded-circle profileimg" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <button className="collapse-button" onClick={handleCollapse}>
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
        <div className={`content ${isCollapsed ? "expanded" : ""}`}>
          {isCollapsed ? (
            ""
          ) : (
            <>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );

};

export default Sidebar;
