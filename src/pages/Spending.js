import React from "react";
import Header from "./Header";

function Spending() {
  return (
    <section style={styles.container}>
      <Header pgTitle="Spending" />
      <p>Some stuff here</p>
      <p>Some stuff here</p>
    </section>
  );
}
export default Spending;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
};
