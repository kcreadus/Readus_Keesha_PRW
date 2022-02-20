import React from "react";
import MyImages from "../MyImages";
import "./MyAds.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const MyAds = (props) => {
  return (
    <article style={styles.myArticle}>
      <div style={styles.flexbox}>
        <MyImages ImageIcon={props.val.img} alt={props.val.alt} />
      </div>
      <div style={styles.cardContent}>
        <div style={styles.title}>
          <h1>{props.val.title}</h1>
        </div>
        <div>
          <p>{props.val.description}</p>
        </div>
        <div style={styles.buttonContainer}>
          <AiFillEdit style={styles.icons} />
          <AiFillDelete style={styles.icons} onClick={props.deleteMe} />
        </div>
      </div>
    </article>
  );
};
export default MyAds;

const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    height: "350px",
    backgroundColor: "whiteSmoke",
    color: "black",

    overflow: "hidden",
    borderRadius: "15px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
  },

  buttonContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: "1rem",
    marginBottom: "0.7rem",
  },
  cardButton: {
    background: "none",
    border: "none",
    padding: 0,
    font: "inherit",
    cursor: "pointer",
    outline: "inherit",
    color: "#A3320B",
  },
  flexbox: {
    display: "flex",
    width: "100%",
    height: "175px",
    overflow: "hidden",
    justifyContent: "space-around",
    backgroundColor: "whiteSmoke",
  },
  cardContent: {
    textAlign: "center",
  },
  icons: {
    height: "2em",
    width: "2em",
    cursor: "pointer",
    color: "#A3320B",
  },
};
