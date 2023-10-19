import React from "react";
import { DivMobile } from "../style/compStyle";
import mobil from "../assets/mobile.gif";
import movil1 from "../assets/app/img1.jpeg";
import movil2 from "../assets/app/img2.jpeg";
import movil3 from "../assets/app/img3.jpeg";
import movil4 from "../assets/app/img4.jpeg";
import movil5 from "../assets/app/img5.jpeg";
import movil6 from "../assets/app/img6.jpeg";
import movil7 from "../assets/app/img7.jpeg";
import movil8 from "../assets/app/img12.jpeg";

import movilgif from "../assets/mobileMunaiky.gif";

const AppMovile = () => {
  const img = [
    mobil,
    movil1,
    movil2,
    movil8,
    movil4,
    movil5,
    movil6,
    movil7,
 
  ];

  return (
    <DivMobile>
      <div>
        <img src={movilgif} alt="" />
        <p>
          <h1>Munayki App</h1>
          La aplicación móvil Munayki está diseñada para ayudar a las personas
          que puedan encontrarse en situaciones de violencia o peligro. Ofrece
          una serie de funciones y recursos para brindar asistencia y apoyo en
          momentos críticos.
        </p>
      </div>
      <h2>
        <strong>Funcionalidades</strong> de la Aplicación
      </h2>
      <section>
        <img src={img[1]} alt="" />
        <article>
          <label>Paso 1: Registro</label>
          <p>
            Abre la aplicación y regístrate con tu información personal, como
            nombre, correo electrónico y número de teléfono.
          </p>
        </article>
      </section>
      <section>
        <img src={img[2]} alt="" />
        <article>
          <label>Paso 2: Asignación de Contactos de Confianza</label>
          <p>
            Después del registro, configura tus tres contactos de confianza.
            Estos serán notificados en caso de una situación de emergencia.
          </p>
        </article>
      </section>
      <section>
        <img src={img[3]} alt="" />
        <article>
          <label>Paso 3: Configuración de Botones de Pánico</label>
          <p>
            En la aplicación, encontrarás un botón de pánico. Configura este
            botón con un toque rápido para enviar alertas a las entidades de
            seguridad, como la cc pcn y Slim. Asegúrate de que esta función esté
            correctamente configurada.{" "}
          </p>
        </article>
      </section>
      <section>
        <img src={img[4]} alt="" />
        <article>
          <label>Paso 4: Envío de Evidencias</label>
          <p>
            En caso de una emergencia, la aplicación recopilará tres fotos y dos
            audios que serán enviados a un servidor. También se notificará a tus
            contactos de confianza y a las entidades de seguridad. Por favor,
            lee detenidamente los términos y condiciones de la aplicación, ya
            que explican las normativas legales que permiten el uso de estas
            evidencias para ayudar a la víctima de violencia.{" "}
          </p>
        </article>
      </section>
      <section>
        <img src={img[5]} alt="" />
        <article>
          <label>Paso 5: Realización de un Quiz de Riesgo</label>
          <p>
            La aplicación cuenta con un Quiz que te permitirá evaluar tu nivel
            de riesgo en situaciones de violencia. Responde a las preguntas y
            obtén una evaluación de tu situación.{" "}
          </p>
        </article>
      </section>
      <section>
        <img src={img[6]} alt="" />
        <article>
          <label>Paso 6: Vista los recursos Informativos</label>
          <p>
            Encuentra en la aplicación recursos informativos relacionados con la
            violencia, que te proporcionarán información y orientación sobre
            cómo afrontar situaciones de peligro.{" "}
          </p>
        </article>
      </section>
      <section>
        <img src={img[7]} alt="" />
        <article>
          <label>Paso 7: Mapa de Instituciones de Denuncia</label>
          <p>
            Utiliza la función de mapa para localizar la institución más cercana
            donde puedas denunciar una situación de violencia. La aplicación te
            mostrará las ubicaciones y te proporcionará información de contacto.
          </p>
        </article>
      </section>
      <br />
      <section>
        <article>
          <label>Privacidad y Seguridad:</label>
          <p>
            La privacidad de cada usuario es una prioridad. Todos los datos
            enviados se encriptan para garantizar su seguridad y
            confidencialidad. La aplicación cumple con las normativas legales y
            éticas para proteger tu información personal y las evidencias
            recopiladas. Recuerda que es esencial leer y entender los términos y
            condiciones de la aplicación, ya que explican en detalle cómo se
            utilizan las evidencias y qué derechos tienes como usuario.
          </p>
          <p>
            [MUNAYKI] es una herramienta poderosa para la protección y
            asistencia en situaciones de violencia. Siéntete seguro al saber que
            cuentas con un sistema de alerta confiable y recursos informativos
            al alcance de tu mano.
          </p>
        </article>
      </section>
    </DivMobile>
  );
};

export default AppMovile;
