import React from "react";
// Dummy Component Component
const MyImages = (props) => {
  return <img src={props.ImageIcon} alt={props.ImageAlt} style={styles.myImages} />;
};
export default MyImages;

const styles = {
  myImages: {
      flex: "auto",
    maxWidth: "95%",
    height: "auto",
    margin: "2%",
    borderRadius: "2%",
    borderColor: "#391832"
  },
  adImages:{
      flex: "auto",
      maxWidth: "100%",
      height: "auto",
      margin: "2%",
    borderRadius: "2%"
  }
};