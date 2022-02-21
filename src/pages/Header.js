import React from "react";
// import Component
import ImageUrl from "../images/avatar.png";
import MyAvatar from "../components/MyAvatar";
import { FaCog } from "react-icons/fa";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.h1}>{props.pgTitle}</h1>
      </div>

      <div style={styles.rightSide}>
        <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>Keesha Readus</span>
        <FaCog style={styles.cog} />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    // margin: '1';
    backgroundColor: "#391832",
    color: "rgb(163,173,194)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  
  
  },
  left: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "2rem"
  },

  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "15%",
    marginRight: "4rem"
  },

  h1: {
    fontSize: "22px",
  },
  cog: {
    height: "2em",
    width: "2em",
    cursor: "pointer",
  },

  span: {
    whiteSpace: "nowrap",
    marginRight: "10%",
  },
};
