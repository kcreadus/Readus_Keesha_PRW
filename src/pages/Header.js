import React from "react";
// import Component
import ImageUrl from "../images/avatar.png";
import MyAvatar from "../components/MyAvatar";
import { AiFillNotification } from "react-icons/ai";
import { Link } from "react-router-dom";
//I enclosed my avatar with the link tag a set the path to the settings page
const Header = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.h1}>{props.pgTitle}</h1>
      </div>
      <div style={styles.rightSide}>
        <Link to="/settings">
          <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        </Link>
        <span style={styles.span}>Keesha Readus</span>
        <AiFillNotification style={styles.notification} />
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
    marginLeft: "2rem",
  },

  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "15%",
    marginRight: "4rem",
  },

  h1: {
    fontSize: "22px",
  },
  notification: {
    height: "2em",
    width: "2em",
    cursor: "pointer",
  },

  span: {
    whiteSpace: "nowrap",
    marginRight: "10%",
  },
};
