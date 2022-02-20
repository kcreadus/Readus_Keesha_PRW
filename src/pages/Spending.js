import React from "react";

function Spending() {
  return (
    <section style={styles.container}>
      <h1>Spending</h1>
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
