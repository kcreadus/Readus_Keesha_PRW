import React, { useState } from "react";
import ChartSmall from "../components/chartCards/ChartSmall";
import ChartMed from "../components/chartCards/ChartMed";
import ChartHorz from "../components/chartCards/ChartHorz";
import Header from "./Header";

function Dashboard() {
  const [chartHorz] = useState([
    { chartHeader: "Income Overview" },
    { chartHeader: "Savings Overview" },
  ]);
  const [chartSmall] = useState([
    { chartHeader: "Income" },
    { chartHeader: "Savings" },
    { chartHeader: "Savings" },
  ]);
  const [chartMed] = useState([
    { chartHeader: "Savings Overview", chartSubHeader: "Start saving today" },

    { chartHeader: "Savings Overview", chartSubHeader: "Start saving today" },
  ]);

  return (
    <section style={styles.container}>
      <Header pgTitle="Dashboard" />

      <div style={styles.chartHorz}>
        {chartHorz.map((chartHorz, id) => (
          <ChartHorz key={id} id={id} chartHorz={chartHorz} />
        ))}
      </div>
      <div style={styles.row}>
        {chartSmall.map((chartSmall, id) => (
          <ChartSmall key={id} id={id} chartSmall={chartSmall} />
        ))}
      </div>
      <div style={styles.row}>
        {chartMed.map((chartMed, id) => (
          <ChartMed key={id} id={id} chartMed={chartMed} />
        ))}
      </div>
    </section>
  );
}
export default Dashboard;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },

  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "1.5rem",
  },

  chartHorz: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "1.5rem",
  },
};
