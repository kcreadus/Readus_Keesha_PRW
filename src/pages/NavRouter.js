import React from "react";
import { Link } from "react-router-dom";

const NavRouter = () => {
  <nav>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/chartDash">ChartDash</Link>
    <Link to="/formDash">FormDash</Link>
    <Link to="/emailDash">EmailDash</Link>
  </nav>;
};
export default NavRouter;
const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignSelf: "stretch",
    fontSize: "1.5rem",
    alignItems: "center",
    backgroundColor: "black",
    padding: "2",
  },
};
