import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import resul from "../../../data/registara.json";
ChartJS.register(ArcElement, Tooltip, Legend);
const url = import.meta.env.VITE_BACKEND_URL;

const CantidadRegistros = ({ datos }) => {
  const [usuarioNombre,setUsuarioNombre]=useState([]);
  const puntuacionTotal = usuarioNombre.reduce((valorActual, item) => {
    if (item.usuarioNombre == "Anónimo") {
      valorActual.Anónimo++;
    }
    else {
      valorActual.registradas++;
    }
    return valorActual;
  }, {
    Anónimo: 0,
    registradas: 0
  });
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    getResultados();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  const getResultados = async () => {
    const response = await fetch(url+"/resultadosCuestionarioUsuario");
    const data = await response.json();
    setUsuarioNombre(data);
  };
 const chartData={
  labels: ["Anónimo", "Registrados"],
  datasets: [
    {
      data:Object.values(puntuacionTotal),
      backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
    },
  ],
}
  return (
    <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <Pie
          data={chartData}
          options={{
            elements: {
              arc: {
                labels: {
                  color: "#fff",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default CantidadRegistros;
