import React from "react";
// import Component
import ImageUrl from "../../images/avatar.png";
import MyAvatar from "../MyAvatar";
import { FaSearch, FaCog } from "react-icons/fa";

const MyHeader = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <div style={styles.logo}></div>
        <h1 style={styles.h1}>{props.pgTitle}</h1>
      </div>
      <div style={styles.searchCont}>
        <FaSearch style={styles.searchIcon} alt="Search Icon" />
        <input
          type="text"
          style={styles.inputwithIcon}
          placeholder={props.placeholder}
        />
      </div>
      <div style={styles.rightSide}>
        <MyAvatar AvatarIcon={ImageUrl} alt="Avatar" />
        <span style={styles.span}>Keesha Readus</span>
        <FaCog style={styles.cog} />
      </div>
    </header>
  );
};

export default MyHeader;

const styles = {
  header: {
    // margin: '1';
    backgroundColor: "#391832",
    color: "rgb(163,173,194)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    //width: '100%',
    //marginBottom: '10px'
  },
  logo: {
    borderRadius: "50%",
    height: "50px",
    width: "60px",
    marginRight: "10%",
    backgroundColor: "white",
    alignItems: "center",
  },
  searchCont: {
    border: "1px solid #9AC6C5",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
  },
  inputwithIcon: {
    border: "none",
    flex: 1,
    padding: "5px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "15%",
  },
  h1: {
    fontSize: "22px",
  },
  cog: {
    height: "2em",
    width: "2em",
    cursor: "pointer",
  },
  searchIcon: {
    background: "#7785AC",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  span: {
    whiteSpace: "nowrap",
    marginRight: "10%",
  }
};
