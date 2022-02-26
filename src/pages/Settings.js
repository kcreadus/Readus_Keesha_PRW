import React from "react";
import Header from "./Header";

function Settings() {
  return (
    <section style={styles.container}>
     <Header pgTitle="Settings" />
      <p>Some stuff here</p>
      <p>Some stuff here</p>
    </section>
  );
}
export default Settings;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
};
