import { styled } from "styled-components";
import { Link } from "react-router-dom";
import {
  BackgraundQuizz,
  FlexComun,
  LoginGlobal,
  PositcionComun,
  colors,
} from "./StyleGlobal";

export const Section = styled.section`
  ${FlexComun}
  width:100%;
  height: 90vh;
  background-color: ${colors.gris};
  position: relative;
  & .login {
    ${FlexComun}
    width:60vw;
    height: 70vh;
    transform: translateX(-200%);
    transition: transform 1s ease-in-out;
    position: absolute;
    ${LoginGlobal}
  }
  & .Register {
    ${FlexComun}
    display: none;
    width: 90vw;
    height: 70vh;
    transform: translateX(-200%);
    transition: transform 0.4s ease-in-out;

    ${LoginGlobal}
    & article {
      width: 40%;
    }
  }

  & .Register > form {
    width: 60%;
    gap: 0.5em;
    font-size: 0.9em;
    flex-direction: row;
    flex-wrap: wrap;
    & label {
      width: 8%;
    }
  }
  & .Register > form > div {
    width: 40%;
  }
  .login.active {
    transform: translateX(0%);
    animation: slideIn 1s ease-in-out;
  }

  .Register.active {
    transform: translateX(0%);
    display: flex;
    animation: slideIn 1s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    & .login {
      height: 68vh;
      width: 95vw;
      & article {
        height: 40vh;
        & img {
          width: 100px;
        }
      }
    }
    & .Register {
      height: 100vh;
      width: 95vw;
      & article {
        height: 50vh;
        & img {
          width: 100px;
        }
      }
    }
    .login > Form {
      flex-wrap: nowrap;
      gap: 0.5em;
      & h1 {
        margin-top: 1.6em;
        margin-bottom: 0.5em;
      }
      label {
        width: 100%;
        text-align: start;
      }
    }
    .Register > Form {
      flex-direction: column;
      flex-wrap: nowrap;
      gap: 0.5em;
      & h1 {
        margin-top: 1.6em;
        margin-bottom: 0.5em;
      }
      label {
        width: 100%;
        text-align: start;
      }
    }

    & .Register > form > div {
      width: 100%;
    }
  }
  @media screen and (max-width: 420px) {
    .login,
    .Register {
      & > article {
        display: none;
      }
      & form {
        width: 90vw;
      }
    }
  }
`;

export const Iniciodiv = styled.div`
  height: 70vh;
  ${FlexComun}
  width:100%;
  position: relative;
  justify-content: space-evenly;
  overflow: hidden;
  &::after {
    position: absolute;
    content: "";
    width: 50%;
    height: 100%;
    background-color: #0008;
    right: 0;
    z-index: 5;
  }
  & > p {
    /* display: none; */
    position: absolute;
    font-size: 7em;
    font-weight: bold;
    color: #fff;
    -webkit-text-stroke: 2px ${colors.CC};
    opacity: 0.1;
    z-index: 1;
    top: 5%;
    text-shadow: 5px 6px 2px ${colors.CC};
  }
  & > article {
    z-index: 2;
    background-color: #2e2e2e;
    width: 25em;
    height: 25em;
    ${FlexComun}
    border-radius: 50%;
    box-shadow: 9px 9px 18px #3d116152, -9px -9px 18px #4815714e;
    & img {
      width: 50em;
      bottom: 0;
      position: absolute;
    }
  }
  & > aside {
    height: 100%;
    width: calc(90% / 3);
    position: relative;
    margin-top: 4em;
    & > button {
      display: none;
    }
    & div {
      position: absolute;
      height: 55px;
      width: 55px;
      content: "";
      background-color: ${colors.CC};
      top: 5%;
      ${FlexComun}
      flex-direction:row;
      border-radius: 1em;
      z-index: 10;
      padding: 1em;
      animation: animloader 1s ease;
      left: -15%;
      & > img {
        height: 40px;
        width: 40px;
        filter: invert(1);
        cursor: pointer;
        animation: escalado 3s infinite;
        @keyframes escalado {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(0.8);
          }
        }
      }
      & p {
        text-align: start;
        width: 200px;
        color: rgb(255, 255, 255);
        content: "";
        position: absolute;
        transform: translateX(70%);
      }
      &:nth-child(1) {
        left: -5%;
        top: 5%;
      }
      &:nth-child(2) {
        left: -5%;
        top: 20%;
      }
      &:nth-child(3) {
        left: 5%;
        top: 35%;
      }
      &:nth-child(4) {
        left: -5%;
        top: 50%;
      }
      &:nth-child(5) {
        left: -15%;
        top: 65%;
      }
    }
  }

  & > section {
    ${FlexComun}
    justify-content:start;
    flex-wrap: wrap;
    padding: 5em 8em;
    gap: 1em;
    animation: DesdeIsquierdaRE 1s ease-in;
    width: calc(90% / 3);
    & > div {
      ${FlexComun}
      flex-direction:column;
      /* width: ; */
      height: 50%;
      font-size: 0.9em;
      font-weight: 300;
      gap: 1em;

      & > p {
        width: 400px;
      }
      & > button {
        padding: 0.8em 2em;
        border: none;
        cursor: pointer;
        color: ${colors.light};
        position: relative;
        border-radius: 0.3em;
        z-index: 5;
        background-color: ${colors.BB};
      }
    }
    & > h1 {
      width: 30%;
      z-index: 2;
      color: ${colors.BB};
      font-size: 2.2em;
      height: 50%;
      & > strong:first-child {
        display: inline;
        font-size: 2em;
        font-weight: bold;
        color: ${colors.BB};
      }
      & > strong:last-child {
        width: 85%;
        font-size: 2em;
        font-weight: bold;
        color: #fff;
        -webkit-text-stroke: 3px ${colors.CC};
        text-stroke: 2px black;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 450px;
    &::after {
      width: 27%;
    }
    & > p {
      opacity: 0.4;
    }
    & > aside {
      display: none;
    }
    & > section {
      height: 100vw;
      width: 20vw;
      justify-content: start;
      padding: 5em 8em 2em 8em;
      transform: translateX(-100px);
      & > div {
        font-size: 0.7em;
        & > p {
          width: 200px;
        }
        & > button {
          z-index: 10;
        }
      }
      & > h1 {
        width: 40%;
        z-index: 2;
        color: ${colors.BB};
        font-size: 1.5em;
        height: 50%;
        & > strong:first-child {
          display: inline;
          font-size: 2em;
          font-weight: bold;
          color: ${colors.BB};
        }
        & > strong:last-child {
          width: 85%;
          font-size: 2em;
          font-weight: bold;
          color: #fff;
          -webkit-text-stroke: 3px ${colors.CC};
          text-stroke: 2px black;
        }
      }
    }
  }
  @media (max-width: 460px) {
    &::after {
      width: 16%;
    }
  }
`;
export const ViolentimetroA = styled.div`
  ${FlexComun}
  width: 100vw;
  margin: 0;
  flex-direction: column;
  gap: 2em;
  & aside {
    width: 100%;
    ${FlexComun}
    gap: 2em;
    margin: 2em 0;
    & > article {
      width: 25em;
    }
    ${FlexComun}
    & > div {
      width: 50%;
      & > h2 {
        margin: 1em 0;
      }
    }
  }
  & > section {
    width: 15em;
    height: 15em;
    border-radius: 50%;
    ${FlexComun}
    position:relative;
    z-index: 2;
    &::after {
      /* ${PositcionComun} */
      animation: escalado 2s infinite;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: 1;
      box-shadow: 0px 5px 10px #0005;
    }
  }
  & > div {
    ${FlexComun}
    width:100%;
    margin: 0 auto;
    height: 25em;
    padding: 2em;
    ${BackgraundQuizz}
    box-shadow: 0 5px 10px #0005;
    gap: 4em;

    & > section {
      ${FlexComun}
      flex-direction:column;
      width: 40%;
      gap: 2em;
      & > div {
        width: 100%;
        ${FlexComun}
        justify-content:space-around;
        & button {
          padding: 1em 2em;
          cursor: pointer;
          border: none;
          border-radius: 0.5em;
          background-color: ${colors.BB};
          color: #fff;
          position: relative;
          &::before {
            content: "";
            background-color: #0005;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0.5em;
            left: -0.5em;
            z-index: -1;
            border-radius: 0.5em;
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      height: 180vh;
      flex-direction: column;
      h2 {
        width: 90vw;
      }
      div {
        flex-direction: column;
        & section {
          width: 100%;
        }
        gap: 2em;
        & button {
          width: 80vw;
        }
      }
      p {
        width: 300px;
      }
    }
  }
`;

export const Filtro = styled.div`
  width: 100vw;
  z-index: 8;
  height: auto;
  flex-wrap: wrap;
  box-shadow: 0 -4px 5px #0005;
  flex-direction: column;
  overflow: hidden;
  & > section {
    ${FlexComun}
    justify-content:start;
    margin: 1em;
    gap: 2em;
    & > article {
      ${FlexComun}
      background-color: ${colors.CC};
      width: 250px;
      height: 40px;
      position: relative;
      &::before {
        content: "";
        background-color: #0005;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0.5em;
        left: -0.5em;
        z-index: -1;
      }
      & a {
        ${FlexComun}
        color: #fff;
        text-decoration: none;
        width: 100%;
        height: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
      & > article {
        width: 180px;
      }
    }
  }

  & > article {
    width: 100%;
    ${FlexComun}
    height:${"100%" || "auto"}
  }
`;
export const Mapasstyle = styled.section`
  height: auto;
  margin: 4em auto;
  width: 80%;
  ${FlexComun}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  & > div {
    text-align: center;
    & > iframe {
      box-shadow: 0 10px 10px #0005;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction:column;
  grid-template-columns: repeat(1,auto);

  }
`;
export const DivMobile = styled.section`
  height: auto;
  padding: 2em;
  & > h2 {
    padding: 2em;
    font-size: 2em;
    & strong {
      color: ${colors.CC};
    }
  }
  & div {
    ${FlexComun}
    gap:5em;
    & > img {
      width: 15em;
    }
    & p {
      width: 50%;
      padding: 3em;
      ${BackgraundQuizz}
      & h1 {
        font-size: 2em;
        padding: 1em;
      }
    }
  }
  & section {
    ${FlexComun}
    gap :2em;
    width: 80%;
    margin: 0 auto;
    height: 100%;
    &:nth-child(2n) {
      flex-direction: row-reverse;
    }
    & p {
      width: 40em;
      padding: 3em;
      ${BackgraundQuizz}
      & h1 {
        font-size: 2em;
        padding: 1em;
      }
    }
    & > img {
      width: 15em;
    }
    & label {
      padding: 2em;
    }
  }
  @media screen and (max-width: 768px) {
    div {
      flex-direction: column-reverse;
      .app {
        width: 100%;
      }
    }
    h2 {
      width: 100%;

      strong {
      }
    }
    & section {
      width: 100%;
      flex-direction: column-reverse;
      & label {
        display: block;
        color: ${colors.CC};
        font-weight: 600;
        width: 80vw;
      }
      & article {
        & > p {
          width: 80vw;
        }
      }
      &:nth-child(2n) {
        flex-direction: column-reverse;
      }
    }
  }
`;
export const Recursos = styled.section`
  ${FlexComun}
  width:100%;
  & > div {
    ${FlexComun}
    width:100vw;
    height: 100%;
    flex-direction: column;
    & > p {
      padding: 0.5em;
      width: 90%;
      font-size: 2em;
      text-align: start;
      border-bottom: solid 1px #000;
    }
    & article {
      ${FlexComun}
      position: relative;
      & > img {
        width: 75vw;
        height: 60vh;
        object-fit: cover;
      }
      & > iframe {
        width: 75vw;
        height: 60vh;
      }
      & > section {
        width: 100%;
        position: absolute;
        ${FlexComun}
        justify-content:space-between;
        background-color: #0005;
        height: 20em;
        content: "";
        bottom: 0;
        & button {
          background-color: ${colors.BB};
          padding: 1em;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .estadoa {
          position: relative;
          padding: 1em 4em;
          bottom: -5em;
          border-radius: 0.5em;
          border: solid 1px ${colors.BB};
          color: #fff;
        }
      }
    }
  }
`;

export const RutasStyle = styled.section`
  & > article {
    width: 90%;
    margin: 0 auto;
    ${FlexComun}
    flex-direction:column;
    padding: 2em;
    position: relative;

    &::before {
      position: absolute;
      content: "";
      width: 2px;
      height: 90%;
      background-color: #8a248a96;
      left: 9.5em;
      bottom: 0;
    }
    & > p {
      font-size: 2em;
      color: ${colors.BB};
      width: 60%;
      ${FlexComun}
      justify-content:space-around;
      margin: 2em;
      & > div {
        width: 10%;
        ${FlexComun}
        color:#000;
      }
    }
    & > div {
      width: 70%;
      & > aside {
        position: relative;
        ${FlexComun}
        justify-content:space-around;
        &::after {
          position: absolute;
          content: "";
          width: 40px;
          height: 40px;
          background-color: ${colors.CC};
          left: -8em;
          border-radius: 50%;
        }

        &:nth-child(2n) {
          /* margin: 1em ; */
        }
        & p {
          padding: 1em;
          margin: 1em;
        }
        & > ul > li {
          width: 100%;
          list-style: none;
          font-size: 0.9em;
          padding: 1em;
          border: 1px solid #0003;
          background-color: ${colors.CC};
          color: #fff;
          box-shadow: 0 5px 10px #0005;
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const SlimStyle = styled.section`
  display: flex;
  flex-wrap: wrap;
  & > article {
    width: 100vw;
    margin: 0 auto;
    ${FlexComun}
    flex-direction:column;
    padding: 2em;
    position: relative;
    & > p {
      font-size: 2em;
      color: ${colors.BB};
      width: 60%;
      ${FlexComun}
      justify-content:space-around;
      margin: 2em;
      & > div {
        width: 10%;
        ${FlexComun}
        color:#000;
      }
    }
    @media screen and (max-width: 768px) {
      & > div {
        flex-direction: column;
      }
      flex-direction: column;
    }
    & > div {
      width: 90%;
      display: flex;
      gap: 1em;
      & > div {
        flex: 1 0 21%;
        scroll-snap-align: start;

        & > ${StyledLink} {
          position: relative;
          ${FlexComun}
          flex-direction:column;
          border: 2px solid ${colors.CC};
          background-color: transparent;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
          height: 425px;
          overflow: hidden;
          & p {
            color: ${colors.D};
            padding: 0.5em;
            margin: 1em;
          }
          &:hover {
            transform: scale(1.05);
            &::before {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              background: linear-gradient(
                to bottom right,
                transparent 90%,
                ${colors.C} 50%
              );
              transform: skewX(-20deg);
              transform-origin: bottom right;
            }
          }
          & .fade {
            opacity: 0;
          }
        }
      }
    }
    & button {
      margin-top: 1em;
      background-color: ${colors.BB};
      padding: 1em;
      border: none;
      color: #fff;
      border-radius: 4px;
    }
  }
`;

export const DocSlimStyle = styled.section`
  & > article {
    width: 100%;
    margin: 0 auto;
    ${FlexComun}
    flex-direction:column;
    padding: 2em;
    position: relative;
    & > p {
      font-size: 2em;
      color: ${colors.BB};
      width: 60%;
      ${FlexComun}
      justify-content:space-around;
      margin: 2em;
      & > div {
        width: 10%;
        ${FlexComun}
        color:#000;
      }
    }
    & > div {
      width: 50%;
      display: ${FlexComun};
      & > div {
        width: 97%;
        padding-left: 2em;
        text-align: justify;
      }
      & > button {
        margin-top: 5%;
        align-self: flex-start;
        background-color: transparent;
        border: 2px solid ${colors.CC};
        border-radius: 10px;
        text-align: center;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        width: 80px;
        height: 30px;
        overflow: hidden;
        &:active {
          background-color: rgba(0, 0, 0, 0.1);
        }
        & > a {
          color: ${colors.black};
          text-decoration: none;
        }
      }
    }
  }
`;

export const LegalStyle = styled.section`
  & > article {
    width: 100%;
    margin: 0 auto;
    ${FlexComun}
    flex-direction:column;
    padding: 2em;
    position: relative;
    & > p {
      font-size: 2em;
      color: ${colors.BB};
      width: 60%;
      ${FlexComun}
      justify-content:space-around;
      margin: 2em;
      & > div {
        width: 10%;
        ${FlexComun}
        color:#000;
      }
    }
    & > div {
      width: 50%;
      display: ${FlexComun};
      & > aside {
        text-align: justify;
        & > p {
          color: ${colors.AA};
        }
        & > div {
          width: 90%;
          padding-left: 2em;
        }
      }
    }
  }
`;
