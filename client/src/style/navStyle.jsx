import { styled } from "styled-components";
import { FlexComun, colors } from "./StyleGlobal";

export const SectionNav = styled.section`
  width: 100%;
  background-color: ${colors.light};
  & nav {
    width: 100%;
    box-shadow: 0 2px 5px #0005;
    z-index: 100;
    ${FlexComun}
    justify-content:space-around;
    height: 4em;
    gap: 2em;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${colors.light};
    & img {
      height: 30px;
    }
    .login {
      ${FlexComun}
      gap:1em;
      border-radius: 0.3em;
      padding: 0.5em 2.5em;
      color: ${colors.light};
      background-color: ${colors.C};
      font-size: 0.9em;
    }
    & section {
      ${FlexComun}
      gap:2em;
      & > a {
        color: ${colors.FF};
        text-decoration: none;
      }
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
        position: relative;
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
      }
    }
  }
  & > .outline {
    width: calc(100% - 280px);
  }
`;
