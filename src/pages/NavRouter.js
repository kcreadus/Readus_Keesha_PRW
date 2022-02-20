import React from "react";

import { Link } from "react-router-dom";

const NavRouter = () => {
  return (
  <nav style={styles.nav}>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/reports">Reports</Link>
    <Link to="/income">Income</Link>
    <Link to="/spending">Spending</Link>
    <Link to="/saving">Saving</Link>
  </nav>
);
}
export default NavRouter;
const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignSelf: "stretch",
    fontSize: "1.5rem",
    alignItems: "center",
    background: "#7785AC",
    padding: "2",
    width: "300px"
  },
};
