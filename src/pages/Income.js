import React from "react";
import Header from "./Header";

function Income() {
  return (
    <section style={styles.container}>
      <Header pgTitle="Income" />
      <p>Some stuff here</p>
      <p>Some stuff here</p>
    </section>
  );
}
export default Income;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  }
};
