import { styled } from "styled-components";
import { FlexComun, LoginGlobal, PositcionComun, colors } from "./StyleGlobal";

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
    & article{
        width:40%;
    }
  }
  & .Register>form{
    width:60%;
    gap:.5em;
    font-size:0.9em;
    flex-direction:row;
    flex-wrap:wrap;
    & label{
        width:8%;
    }
  }
  & .Register>form>div {
    width:40%;
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
