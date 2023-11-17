import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import resul from "../../../data/registara.json";
ChartJS.register(ArcElement, Tooltip, Legend);

const CantidadRegistros = ({ datos }) => {
  const [usuarioNombre,setUsuarioNombre]=useState([]);
  const puntuacionTotal = usuarioNombre.map(user => ({ usuarioNombre: user.usuarioNombre })).reduce((valorActual, item) => {
    if (item.usuarioNombre == "Anónimo") {
      valorActual.anonimos++;
    }
    else {
      valorActual.registradas++;
    }
    return valorActual;
  }, {
    anonimos: 0,
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
    const response = await fetch("https://munayki-serve.vercel.app/resultadosCuestionario");
    const data = await response.json();
    setUsuarioNombre(data);

  };
  const [chartData, setChartData] = useState({
    labels: ["anonimo", "registrados"],
    datasets: [
      {
        data:Object.values(resul),
        backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
      },
    ],
  });

  /* useEffect(() => {
    setChartData({
      labels: ["Anonimas", "Registradas"],
      datasets: [
        {
          data: [datos.length || 20, datos.length || 20],
          backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
        },
      ],
    });
    console.log(datos);
  }, [datos]); */

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
