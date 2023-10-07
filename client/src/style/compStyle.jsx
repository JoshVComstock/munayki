import { styled } from "styled-components";
import { FlexComun, LoginGlobal, PositcionComun, colors } from "./StyleGlobal";

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
`;

export const Iniciodiv = styled.div`
  height: 70vh;
  ${FlexComun}
  width:100%;
  position: relative;
  justify-content: space-evenly;
  & > p {
    position: absolute;
    font-size: 7em;
    font-weight: bold;
    color: #fff;
    -webkit-text-stroke: 2px ${colors.CC};
    opacity: 0.2;
    z-index: 1;
    top: 20%;
    text-shadow: 5px 6px 2px ${colors.CC};
  }
  & > div {
    width: 75%;
    z-index: 3;
    ${FlexComun}
    justify-content:end;
    height: 100%;
    .slider-container {
      position: relative;
      width: 50%;
      height: 100%;
      z-index: 3;
    }
    .slide {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 150%;
      transition: left 0.5s ease;
      z-index: -1;
      img {
        bottom: 0;
        position: absolute;
        width: 45em;
        height: 28em;
        object-fit: cover;
        filter: grayscale(1);
        background-color: transparent;
      }
    }

    .slide.active {
      left: 10%;
      & img {
        left: -80%;
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
    & > div {
      ${FlexComun}
      flex-direction:column;
      width: 80%;
      height: 50%;
      font-size: 0.9em;
      font-weight: 300;
      gap: 1em;
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
      & > strong {
        width: 85%;
        font-size: 2em;
        font-weight: bold;
        color: #fff;
        -webkit-text-stroke: 3px ${colors.CC};
        text-stroke: 2px black;
      }
    }
  }
`;
export const ViolentimetroA = styled.div`
    ${FlexComun}
    background-color:${colors.C};
    height:60vh;
color:#fff;
width:100vw;
  & > section {
    width: 15em;
    height: 15em;
    border-radius: 50%;
    ${FlexComun}
    position:relative;
    z-index: 2;
    &::after {
      ${PositcionComun}
      animation:escalado 2s infinite;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: 1;
      box-shadow: 0px 5px 10px #0005;

      @keyframes escalado {
        0% {
          transform: scale(1);
        }
       
        50% {
          transform: scale(1.1);
        }
       
        100% {
          transform: scale(1);
        }
      }
    }
  }
  & div{
    ${FlexComun}
    width:calc(80% / 3);
    margin:0 auto;
    height:100%;
  }
`;

export const Filtro = styled.div`
  ${FlexComun}
  width: 100%;
  z-index: 8;
  height: auto;
  flex-wrap: wrap;
box-shadow: 0 -4px 5px #0005;
flex-direction:column;
& > div{
width:100%;
padding:1em;

& > section{
  ${FlexComun}
  justify-content:start;
  margin:1em;
  gap:2em;
& a{
  ${FlexComun}
  text-decoration:none;
  padding:.5em;
  width:10em;
  background-color:${colors.C};
  color:#fff;
  position:sticky;
  z-index:2;

}
}

& article{
  ${FlexComun}

}
}
`;
export const Mapasstyle =styled.section`
height:100vh;
`;