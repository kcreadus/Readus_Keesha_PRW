import React from "react";
// import Component
import ImageUrl from "../../images/avatar.png";
import MyIcons from "../MyIcons";

const MyHeader = (props) => {
  return (
    <header style={styles.myHeader}>
      <div style={styles.left}>
        <div style={styles.logo}></div>
        <h1>The Mane Event</h1>
      </div>
      <div style={styles.searchCont}>
        <input type="text" style={styles.inputwithIcon} placeholder="Search" />
      </div>
      <div style={styles.rightSide}>
        <MyIcons IconImg={ImageUrl} />
      </div>
    </header>
  );
};

export default MyHeader;

const styles = {
  myHeader: {
    // margin: '1';
    padding: "1%",
    backgroundColor: "black",
    color: "rgb(163,173,194)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "1px 6px 1px 1px rgba(0, 0, 255, .1)",
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
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "row",
    borderRadius: "2px",
    width: "40%",
  },
  inputIcon: {
    background: "#ddd",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
  },
  inputwithIcon: {
    border: "none",
    flex: 1,
    padding: "10px",
  },
  rightSide: {
    display: "flex",
    flexDirection: "row",
  },
};
