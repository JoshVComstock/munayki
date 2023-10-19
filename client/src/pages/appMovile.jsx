import React from "react";
import { DivMobile } from "../style/compStyle";
import mobil from "../assets/mobile.gif";
import movil1 from "../assets/app/Munayki_page-0001.jpg";
import movil2 from "../assets/app/Munayki_page-0002.jpg";
import movil3 from "../assets/app/Munayki_page-0003.jpg";
import movil4 from "../assets/app/Munayki_page-0004.jpg";
import movil5 from "../assets/app/Munayki_page-0008.jpg";
const AppMovile = () => {
  const img = [mobil, movil1, movil2, movil3, movil4, movil5];

  return (
    <DivMobile>
      <div>
        <img src={img[1]} alt="" />
        <p>
         se dispondra de un logue para la proteccion de los datos , en este apartado tambien mostrara como quieres camuflar la App
        </p>
      </div>
      <div>
        <img src={img[2]} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          eveniet consectetur ex perferendis sapiente animi doloremque deleniti
          nesciunt totam officia natus nam illum cum, sint reiciendis error
          odio. Eum, iusto?
        </p>
      </div>
      <div>
        <img src={img[3]} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          eveniet consectetur ex perferendis sapiente animi doloremque deleniti
          nesciunt totam officia natus nam illum cum, sint reiciendis error
          odio. Eum, iusto?
        </p>
      </div>
      <div>
        <img src={img[4]} alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          eveniet consectetur ex perferendis sapiente animi doloremque deleniti
          nesciunt totam officia natus nam illum cum, sint reiciendis error
          odio. Eum, iusto?
        </p>
      </div>

    </DivMobile>
  );
};

export default AppMovile;
