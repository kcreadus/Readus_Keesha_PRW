import React from "react";
import { Routes, Route } from "react-router-dom";
import NavRouter from "./pages/NavRouter";
import Income from "./pages/Income";
import Saving from "./pages/Saving";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Spending from "./pages/Spending";
import Settings from "./pages/Settings";
//ADD IMAGES

function App() {
  return (
    <div>
      <main style={styles.container}>
        <NavRouter />
        <section style={styles.nav}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="income" element={<Income />} />
            <Route path="saving" element={<Saving />} />
            <Route path="spending" element={<Spending />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}
export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",

    width: "100vw",
    height: "100vh",
    padding: "1%",
  },

  nav: {
    display: "flex",
    width: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flex: "wrap",
    width: "100%",

    justifyContent: "space-around",
    marginBottom: "50px",
  },
};
