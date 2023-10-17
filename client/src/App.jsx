import { Routes, Route, HashRouter } from "react-router-dom";
import NavBar from "./components/Informativa/navBar";
import Inicio from "./pages/inicio";
import NabarDash from "./components/dashboard/nabarDash";
import Organacion from "./pages/Dashboard/organizaciones";
import User from "./pages/Dashboard/user";
import Admin from "./Routes/admin";
import Alertas from "./pages/Dashboard/alertas";
import Login from "./pages/login";
import UbiciacionesCli from "./pages/ubiciaciones";
import { UserContextProvider } from "./context/userContextProvider";
import { Navcontextprovider } from "./context/navContextProvider";
import Routing from "./Routes/Routing";
import Mapas from "./pages/mapas";
import Violentimetro from "./pages/InicioSecciones/violentimetro";
import Quizz from "./pages/quizz";

function App() {
  return (
    <HashRouter>
      <UserContextProvider>
        <Navcontextprovider>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<Inicio />}>
                <Route path="/" element={<Violentimetro />} />
                <Route path="/mapas" element={<Mapas />} />
                <Route path="/quizz" element={<Quizz />} />
                <Route path="/app" element={<Inicio />} />
                <Route path="/Informate" element={<Inicio />} />
              </Route>
              <Route path="/ubicaciones" element={<UbiciacionesCli />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <Routing>
                  <NabarDash>
                    <Admin />
                  </NabarDash>
                </Routing>
              }
            >
              <Route path="/dashboard/organizacion" element={<Organacion />} />
              <Route path="/dashboard/alertas" element={<Alertas />} />
              <Route path="/dashboard/user" element={<User />} />
            </Route>
          </Routes>
        </Navcontextprovider>
      </UserContextProvider>
    </HashRouter>
  );
}

export default App;
