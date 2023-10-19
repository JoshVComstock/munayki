import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CantidadRegistros = ({ datos }) => {
  const [chartData, setChartData] = useState({
    labels: ["Anonimas", "Registradas"],
    datasets: [
      {
        data: [datos,1],
        backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: ["Anonimas", "Registradas"],
      datasets: [
        {
          data: [datos.length, 1],
          backgroundColor: ["rgb(174,25,89)", "rgb(73,39,121)"],
        },
      ],
    });
    console.log(datos);
  }, [datos]);

  return (
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
  );
};

export default CantidadRegistros;
