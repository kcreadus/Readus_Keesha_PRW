import React from "react";
import "./MyBtn.css";

const MyBtn = (props) => {
  return (
    <button className="button" style={styles.postBtn}>
      {props.btnText}
    </button>
  );
};
export default MyBtn;

const styles = {
  postBtn: {
    display: "flex",
    backgroundColor: "#391832",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
    width: "96%",
    fontWeight: "bold",
    color: "#fff",
    marginTop: "6%",
    marginRight: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    justifyContent: "center",
  },
};
