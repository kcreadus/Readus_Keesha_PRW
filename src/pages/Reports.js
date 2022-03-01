import React from "react";
import Header from "./Header";

function Reports() {
  return (
    <section style={styles.container}>
      <Header pgTitle="Reports" />
    </section>
  );
}
export default Reports;

const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  }
};
