import React from "react";
import PieCharts from "../charts/PieCharts";

const ChartSmall = ({ chartSmall }) => {
  return (
    <article key={chartSmall.id} style={styles.card}>
      <h1>{chartSmall.chartHeader}</h1>
      <PieCharts />
    </article>
  );
};

export default ChartSmall;

const styles = {
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",

    backgroundColor: "white",
    margin: "0.5rem",
    padding: "1rem",
    width: "50%",
    minHeight: "30%",
  
  },
};
