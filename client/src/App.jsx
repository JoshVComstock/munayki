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
import mainStore from "./components/zustand/stores/storeUno";
import { useEffect, useState } from "react";
function App() {
  // const { fetchPhotos, photos } = mainStore();
  // const [photosFetched, setPhotosFetched] = useState(false);

  // useEffect(() => {
  //   if (!photosFetched) {
  //     fetchPhotos();
  //     setPhotosFetched(true);
  //   }
  // },[]);
  // if (!photos.length) {
  //   return <label>Cargando ...</label>;
  // }
  // console.log(photos);

  // const renderPhotos = () => {
  //   if (photos && photos.length)
  //     return photos.map((photo) => <img key={photo.id} src={photo.url} />);
  // };

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
          <Route path="/dashboard/organizacion" element={<Organacion />} />
          <Route path="/dashboard/alertas" element={<Alertas />} />
          <Route path="/dashboard/user" element={<User />} />
        </Route>
      </Routes>
    </HashRouter>
    // <>
    //   <div>{renderPhotos()}</div>
    // </>
  );
}

export default App;
