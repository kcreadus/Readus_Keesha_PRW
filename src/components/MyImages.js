import React from "react";
// Dummy Component Component
const MyImages = (props) => {
  return <img src={props.ImageIcon} alt={props.ImageAlt} style={styles.myImages} />;
};
export default MyImages;

const styles = {
  myImages: {
      flex: "auto",
    maxWidth: "90%",
    height: "auto",
    margin: "2%",
    borderRadius: "2%"
  },
};