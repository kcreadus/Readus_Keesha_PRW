import React from "react";
import HorzLineCharts from "../charts/HorzLineCharts";

const ChartMed = ({ chartMed }) => {
  return (
    <article key={chartMed.id} style={styles.card}>
      <h1>{chartMed.chartHeader}</h1>
      <h2>{chartMed.chartSubHeader}</h2>
      <HorzLineCharts />
    </article>
  );
};

export default ChartMed;

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    backgroundColor: "white",
    minHeight: "50%",
    width: "50%",
  
    padding: "1rem",
    marginRight: "1rem"
  },
};
