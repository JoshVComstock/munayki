import React, { useEffect } from 'react';

const  Rutamujeres=()=> {
  useEffect(() => {
    // Código JavaScript que necesitas ejecutar después de cargar la página
    // Aquí puedes incluir cualquier funcionalidad que se requiera después de la carga de la página.
  }, []);

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="matooltip.css" media="all" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="estilo.css" />
        <title>Document</title>
      </head>
      <body>
        <section id="inicio" className="inicio">
          <div className="contenedor-inicio">
            <h2 id="text-container"></h2>
            <p>
              LA violencia se manifiesta en la vida cotidiana de mujeres y hombres, y que la mayoría de las veces no se tienen en cuenta o se confunden o desconocen.
            </p>
            <p>
              Si crees estar sufriendo maltrato físico o psicológico o alguna persona cercana a ti, Puedes realizar el siguiente cuestionario del violentómetro
            </p>
            <button>Realizar ahora</button>
          </div>
        </section>
        {/* Sección proyectos */}
        <section id="portfolio" className="porfolio">
          <div id="proyectos" className="proyectos">
            <div className="fila">
              <div className="col">
                <img src="img/flecha.png" alt="" />
              </div>
              <div
                className="col"
                matooltip="La víctima debe aprender a reconocer el hecho violento (gritos, insultos, humillaciones, golpes) y DENUNCIAR, mas muchas mujeres aún sienten miedo de hablar sobre estos ataques porque en la mayoría de los casos han naturalizado estas formas de violencia en su hogar y temen el accionar de su agresor."
                matooltip-direction="down"
                matooltip-size="large"
              >
                <img src="img/1c.png" alt="" />
                <div className="overlay"></div>
                <div className="info">
                  <h2>1. </h2>
                  <p>Agresiones físicas o psicológicas</p>
                </div>
              </div>
              {/* Continúa con los otros elementos */}
            </div>
          </div>
        </section>
        <script src="script.js"></script>
      </body>
    </html>
  );
}

export default Rutamujeres;
