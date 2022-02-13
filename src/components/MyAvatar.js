import React from "react";
// Dummy Component Component
const MyAvatar = (props) => {
  return <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />;
};
export default MyAvatar;

const styles = {
  myAvatar: {
    height: "3em",
    cursor: "pointer",
    marginRight: "5%",
    borderRadius: "50%",
  },
};