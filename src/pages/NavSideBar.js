/*import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./NavSideBar.css";

function NavSideBar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div style={styles.navBar}>
        <Link to="#" style={styles.menuBars}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul style={styles.navItems}>
          <li style={styles.navToggle}>
            <Link to="#" style={styles.menuBars}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.pName}>
                <Link to={item.path}>
                  {item.icon}
                  <span style={styles.span}>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavSideBar;

const styles = {
  navBar: {
    backgroundColor: "#060b26",
    height: "80px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
  },
  menuBars: {
    marginLeft: "2rem",
    fontSize: "2rem",
    background: "none"
  },
  navMenu: {
    backgroundColor: "#060b26",
    width: "250px",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    //left: "-100%",
    transition: "850ms"
  },
  navText: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "8px",
    paddingRight: "0px",
    paddingBottom: "8px",
    paddingLeft: "16px",
    listStyle: "none",
    height: "60px"
  },

  navToggle: {
    backgroundColor: "#060b26",
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
  },
  navItems: {
    width: "100%"
  },
  span: {
    marginLeft: "16px"
  },
};*/
