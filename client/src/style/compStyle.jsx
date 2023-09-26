import { styled } from "styled-components";
import { FlexComun, PositcionComun, colors } from "./StyleGlobal";

export const Section = styled.section`
  ${FlexComun}
  width:100%;
  height: 100vh;
  background-color: ${colors.gris};
  position: relative;
  & .login {
    ${FlexComun}
    width:60vw;
    height: 70vh;
    /* background-color:${colors.BB}; */
    transform: translateX(-200%);
    transition: transform 1s ease-in-out;
    position: absolute;
    & > article {
      position: relative;
      width: 50%;
      height: 100%;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0 5px 10px #0008;
      z-index: 10;
      & > div:nth-child(1) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.BB};
        top: -4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(2) {
        ${PositcionComun}
        width:6em;
        height: 6em;
        background-color: ${colors.CC};
        top: 4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(3) {
        ${PositcionComun}
        width:5em;
        height: 5em;
        background-color: ${colors.DD};
        bottom: 10em;
        border-radius: 50%;
      }
      & > div:nth-child(4) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.FF};
        bottom: 2em;
        left: -4em;
        border-radius: 50%;
      }
    }
    & > form {
      width: 50%;
      height: 90%;
      ${FlexComun}
      flex-direction:column;
      padding: 2em;
      gap: 1em;
      box-shadow: 0 5px 10px #0005;
      background-color: ${colors.gris2};
      & > h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 2em;
      }
      & > label {
        width: 100%;
      }
      & > div {
        ${FlexComun}
        gap:1em;
        width: 100%;
        & > input {
          width: 80%;
          padding: 0.5em;
          border: solid 1px #0005;
          outline: none;
          border-radius: 1em;
          background-color: ${colors.trasparent};
        }
        & > input:focus {
          border: none;
          border-radius: 0;
          border-bottom: solid 1px ${colors.CC};
        }
      }
      & button {
        padding: 0.5em 2em;
        border-radius: 1em;
        border: solid 1px ${colors.CC};
        cursor: pointer;
        margin-top: 1em;
        ${FlexComun}
        gap:1em;
        &:hover {
          background-color: ${colors.CC};
          border: solid 1px transparent;
          color: ${colors.light};
        }
      }
      & > p {
        width: 100%;
        cursor: pointer;
        text-align: center;
        border-bottom: solid 1px #0005;
        padding: 1em;
        font-size: 0.8em;
        &:hover {
          /* background-color: ${colors.CC}; */
          border-bottom: solid 1px ${colors.CC};

          color: ${colors.CC};
        }
      }
      position: relative;
      & .volver {
        ${FlexComun}
        gap:1em;
        background-color: ${colors.CC};
        border: solid 1px transparent;
        color: ${colors.light};
        border-radius: 0;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  & .Register {
    display: none;
    width: 90vw;
    height: 70vh;
    box-shadow: 0 5px 10px #0005;
    transform: translateX(-200%);
    transition: transform 0.4s ease-in-out;
    & > article {
      position: relative;
      width: 50%;
      height: 100%;
      background-color: #fff;
      overflow: hidden;
      & > div:nth-child(1) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.BB};
        top: -4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(2) {
        ${PositcionComun}
        width:6em;
        height: 6em;
        background-color: ${colors.CC};
        top: 4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(3) {
        ${PositcionComun}
        width:5em;
        height: 5em;
        background-color: ${colors.DD};
        bottom: 10em;
        border-radius: 50%;
      }
      & > div:nth-child(4) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.FF};
        bottom: 2em;
        left: -4em;
        border-radius: 50%;
      }
    }
    & > form {
      width: 50%;
      height: 100%;
    }
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
  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  /* background-color:${colors.AA}; */
`;
