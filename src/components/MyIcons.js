import React from "react";
// Dummy Component Component
const MyIcons = (props) => {
  return (
    <img src={props.IconImg} alt={props.ImageAlt} style={styles.MyIcons} />
  );
};
export default MyIcons;

const styles = {
  myAvatar: {
    height: "50px",
    cursor: "pointer",
    borderRadius: "50%",
  },
};
