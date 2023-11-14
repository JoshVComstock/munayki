import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CantidadRegistros = ({ datos }) => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  const [chartData, setChartData] = useState({
    labels: ["Anonimas", "Registradas"],
    datasets: [
      {
        data: [datos, 1],
        backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: ["Anonimas", "Registradas"],
      datasets: [
        {
          data: [datos.length||20, datos.length||20],
          backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
        },
      ],
    });
    console.log(datos);
  }, [datos]);

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
