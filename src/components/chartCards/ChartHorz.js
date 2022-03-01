import React from "react";
import LineCharts from "../charts/LineCharts";

const ChartHorz = ({ chartHorz }) => {
  return (
    <article key={chartHorz.id} style={styles.card}>
      <h1>{chartHorz.chartHeader}</h1>
      <LineCharts />
    </article>
  );
};

export default ChartHorz;

const styles = {
  card: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    minHeight: "50%",
    backgroundColor: "white",
    margin: "0.5rem",
    padding: "0.5rem",
    width: "50%"
  }
}
