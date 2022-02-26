import React from "react";
//I imported all icons from that icon family and saved it to a variable
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";
import "./NavRouter.css"

import { Link } from "react-router-dom";

//I added the icons to the navagation
const NavRouter = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/dashboard"><AiIcons.AiOutlineDashboard /></Link>
      <Link to="/reports"><VscIcons.VscReport /></Link>
      <Link to="/income"><FaIcons.FaRegMoneyBillAlt /></Link>
      <Link to="/spending"><AiIcons.AiOutlineCreditCard /></Link>
      <Link to="/saving"><AiIcons.AiOutlineBank /></Link>
      <Link to="/settings"><FaIcons.FaCog /></Link>
    </nav>
  );
};
export default NavRouter;
const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignSelf: "stretch",
    fontSize: "2.5rem",
    alignItems: "center",
    background: "#391832",
    paddingTop: "4%",
    width: "150px",
 
  },
  
  
};
