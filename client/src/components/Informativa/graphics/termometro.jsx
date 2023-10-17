import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Termometro = () => {
  return (
    <aside>
    <article>  <Doughnut data={data} /></article>
      <div>
        <h2>Niveles de riesgo</h2>
          <li> 1. Estar atent@ a estas conductas</li>
          <li> 2. Ten cuidado, no dejes que suceda, corres riesgo</li>
          <li>
            3. Tu integridad física y psicológica esta en riesgo, no
            calles,DENUNCIA!!!
          </li>
     
      </div>
    </aside>
  );
};

export default Termometro;
