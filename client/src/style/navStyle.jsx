import { styled } from "styled-components";
import { FlexComun, colors } from "./StyleGlobal";

export const SectionNav = styled.section`
  width: 100%;

  & nav {
    background-color: ${colors.CC};
    width: 100%;
    ${FlexComun}
    justify-content:space-around;
    height: 4em;
    gap: 2em;
    box-shadow: 0 5px 10px #0005;
    position: sticky;
    top: 0;
    left: 0;
    .login {
      border-radius: 1em;
      padding: 0.5em 3em;
      color: ${colors.CC};
      background-color: ${colors.light};
      font-size: 0.9em;
    }
    & > a {
      color: ${colors.light};
      text-decoration: none;
    }
  }
  ${FlexComun}
  flex-direction:column;
  & outline {
    background-color: #000;
  }
`;
export const Sectionav = styled.section`
  ${FlexComun}
  flex-direction:row;

  & > nav {
    ${FlexComun}
    flex-direction:column;
    justify-content: start;
    width: 280px;
    height: 100vh;
    background-color: ${colors.CC};
    color: ${colors.light};
    box-shadow: 0 5px 10px #0005;
    position: sticky;
    top: 0;
    left: 0;
    & h1 {
      margin: 2em;
    }
    & > section {
      height: 60%;
      ${FlexComun}
      flex-direction:column;
      width: 100%;
      gap: 1em;
      & button {
        width: 70%;
        padding: 0.5em;
        color: ${colors.CC};
      }
      & > a {
        ${FlexComun}
        justify-content:start;

        gap: 1em;
        color: ${colors.light};
        text-decoration: none;
        width: 80%;
        padding: 0.5em;
        margin-left: 1em;
        /* border-left: ${colors.light} 2px solid; */
        /* border:solid 1px red; */
      }
    }
  }
  & > .outline {
    width: calc(100% - 280px);
  }
`;
