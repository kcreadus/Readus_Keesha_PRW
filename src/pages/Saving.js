import React from "react";
import Header from "./Header";

function Saving() {
  return (
    <section style={styles.container}>
       <Header pgTitle="Saving" />
      <p>Some stuff here</p>
      <p>Some stuff here</p>
    </section>
  );
}

export default Saving;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
};