import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/Informativa/navBar";
import Inicio from "./pages/inicio";
import NabarDash from "./components/dashboard/nabarDash";
import Ubicaciones from "./pages/Dashboard/ubicaciones";
import User from "./pages/Dashboard/user";
import Admin from "./Routes/admin";
import Alertas from "./pages/Dashboard/alertas";
import Login from "./pages/login";
import UbiciacionesCli from "./pages/ubiciaciones";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/ubicaciones" element={<UbiciacionesCli />} />
        <Route path="/login" element={<Login />} />

        </Route>

      </Routes>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <NabarDash>
              <Admin />
            </NabarDash>
          }
        >
          <Route path="/dashboard/ubicaciones" element={<Ubicaciones />} />
          <Route path="/dashboard/alertas" element={<Alertas />} />
          <Route path="/dashboard/user" element={<User />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
