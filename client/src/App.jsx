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
import { ModalContextProvider } from "./context/modalContext";
import Modal from "./modal";
import AppMovile from "./pages/appMovile";
import Rutadenuncias from "./pages/rutadenuncias";
import Slim from "./pages/slim";
import Legal from "./pages/legal";
import { ScrollProvider } from "./context/ScrollContext";
import Rutamujeres from "./pages/rutamujeres";

function App() {
  return (
    <HashRouter>
      <ModalContextProvider>
      <UserContextProvider>
      <ScrollProvider>
        <Navcontextprovider>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="/" element={<Inicio />}>
                <Route path="/" element={<Violentimetro />} />
                <Route path="/mapas" element={<Mapas />} />
                <Route path="/quizz" element={<Quizz />} />
                <Route path="/appmovil" element={<AppMovile />} />
                <Route path="/rutadenuncias" element={<Rutadenuncias />} />
                <Route path="/rutas" element={<Rutamujeres />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/slim" element={<Slim />} />
              </Route>
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
              <Route path="/dashboard/organizacion" element={<Organacion />} />
              <Route path="/dashboard/alertas" element={<Alertas />} />
              <Route path="/dashboard/user" element={<User />} />
            </Route>
          </Routes>
          <Modal />
        </Navcontextprovider>
        </ScrollProvider>
      </UserContextProvider>
      </ModalContextProvider>
    </HashRouter>
  );
}

export default App;
