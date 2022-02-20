import { Routes, Route } from "react-router-dom";
import Header from "./components/header/MyHeader";
import FormDash from "./pages/FormDash";
import EmailDash from "./pages/EmailDash";
import Dashboard from "./pages/Dashboard";
import ChartDash from "./pages/ChartDash";

//ADD IMAGES

function App() {
  return (
    <div>
      <Header />
      <main style={styles.container}>
        <Nav style={styles.nav} />
        <section>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="chartDash" element={<ChartDash />} />
            <Route path="formDash" element={<FormDash />} />
            <Route path="emailDash" element={<EmailDash />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}
export default App;

const styles = {
  wrapper: {
    height: "100%",
    width: "100%",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    flex: "wrap",
  },

  nav: {
    display: "flex",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    flex: "wrap",
    width: "100%",

    justifyContent: "space-around",
    marginBottom: "50px",
  },
  pageView: {},
};
