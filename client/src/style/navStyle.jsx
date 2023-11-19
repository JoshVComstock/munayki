import { styled } from "styled-components";
import { BackgraundQuizz, FlexComun, colors } from "./StyleGlobal";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SectionNav = styled.section`
  width: 100%;
  background-color: ${colors.light};
  & > button {
    display: none;
  }
  & nav {
    width: 100%;
    box-shadow: 0 2px 5px #0005;
    z-index: 100;
    ${FlexComun}
    justify-content:space-around;
    height: 5em;
    gap: 2em;
    position: sticky;
    top: 0;
    left: 0;
    background-color: ${colors.light};
    & div {
      ${FlexComun}

      & img {
        height: 80px;
        &:nth-child(2) {
          height: 40px;
        }
      }
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
        font-size: 0.9em;
      }
    }
  }
  ${FlexComun}
  flex-direction:column;
  & outline {
    background-color: #000;
  }
  .navVisible {
    display: none;
    width: 48px;
    align-self: flex-start;
  }
  .navNoVisible {
    display: none;
    width: 48px;
    align-self: flex-start;
  }
  @media screen and (max-width: 768px) {
    & > button {
      display: flex;
      width: 100%;
      border: none;
      background-color: ${colors.CC};
      justify-content: center;
      align-items: center;
      height: 60px;
      font-size: 20px;
      color: #fff;
    }
    nav {
      display: none;
    }
    .navNoVisible {
      opacity: 0;
      animation: slideIn 1s ease-in-out;
    }
    .navVisible {
      animation: slideIn 1s ease-in-out;
      display: flex;
      flex-direction: column;
      width: 70vw;
      height: 100vh;
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;
      background-color: #fff;
      & button {
        width: 48px;
        align-self: flex-end;
        border: none;
        background-color: ${colors.CC};
        color: #fff;
        height: 48px;
        margin: 2em;
      }
      & article {
        display: flex;
        flex-direction: column;
        gap: 1em;
        & div {
          display: flex;
          width: 70%;
          justify-content: flex-start;
          background-color: ${colors.CC};
          align-items: center;
          color: #fff;
          padding: 0.5em 1em;
          font-size: 0.8em;
          border-radius: 0 0.5em 0.5em 0;
          & img {
            filter: invert(1);
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;
export const Sectionav = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > nav {
    ${FlexComun}
    flex-direction:column;
    width: 240px;
    height: 100vh;
    background-color: ${colors.light};
    color: ${colors.gray300};
    box-shadow: 0 5px 10px #0005;
    position: sticky;
    top: 0;
    left: 0;

    & > div {
      width: 100%;
      height: 30%;
      ${FlexComun}
      flex-direction: column;
      padding: 10px;
      & img {
        width: 45%;
      }
    }
    & > section {
      height: 70%;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1em;
      & > div {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        & > .active {
          transition: 0.5s;
          border-left: 5px solid ${colors.FF};

          & > img {
            filter: invert(39%) sepia(56%) saturate(1116%) hue-rotate(128deg)
              brightness(96%) contrast(101%);
          }
        }
      }
      & > section {
        width: 100%;
        height: 30%;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: end;

        & > button {
          border: none;
          width: 150px;
          height: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          padding: 10px;
          background: transparent;
          cursor: pointer;
          &:hover {
            & > img {
              /* filter: invert(39%) sepia(56%) saturate(1116%) hue-rotate(128deg)
                brightness(96%) contrast(101%); */
            }
          }
          & > img {
            width: 25px;
            height: 25px;
            width: 25px;
            height: 25px;
            /* filter: invert(72%) sepia(11%) saturate(1727%) hue-rotate(121deg)
              brightness(89%) contrast(81%); */
          }
        }
      }
    }
  }
  & > .outline {
    width: calc(100% - 230px);
    display: flex;
    flex-direction: column;
    background: #fff;
    & > header {
      display: flex;
      flex-direction: row;
      padding: 1.5rem;
      justify-content: space-between;
      border-bottom: solid 1px #0005;
    }
  }
`;
export const Linkes = styled(NavLink)`
  ${FlexComun}
  justify-content:start;
  gap: 1em;
  color: ${colors.CC};
  text-decoration: none;
  width: 80%;
  padding: 0.5em;
  margin-left: 1em;
  border-left: 5px solid transparent;
  font-size: 0.8em;
  & > img {
    width: 25px;
    height: 25px;
    /* filter: invert(72%) sepia(11%) saturate(1727%) hue-rotate(121deg)
      brightness(89%) contrast(81%); */
  }
  &:hover > img {
    filter: invert(39%) sepia(56%) saturate(1116%) hue-rotate(128deg)
      brightness(96%) contrast(101%);
  }
`;
export const Footerstyle = styled.section`
  height: auto;
  z-index: 100;
  width: 100%;
  ${FlexComun}
  justify-content:start;
  flex-direction: column;
  background-color: #1d2531;
  & > div {
    ${FlexComun}
    width: 100%;
    flex-wrap: wrap;
    gap: 2em;
    height: 4.5em;
    padding: 1em;
    & h3 {
      width: 100%;
      color: #fff;
    }
    & > img {
      height: 100%;
      &:nth-child(2) {
        height: 65px;
      }
    }
  }

  & > section {
    width: 100%;
    ${FlexComun}
    gap:1em;
    padding: 4em 2em;
    border-top: solid 1px #1d2531;
    & img {
      width: 20rem;
    }
    & > div {
      width: 80%;
      ${FlexComun}
      gap:1em;
      flex-wrap: wrap;
      & > a {
        width: 40%;
        color: #fff;
        text-decoration: none;
        border-left: solid 1px #fff;
        padding: 0.2em 1em;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .logos {
      width: 100%;
      height: auto;
      justify-content: start;
      & img {
        width: 100px;
        height: auto;
        &:nth-child(2) {
          height: 40px;
        }
      }
    }
    section {
      flex-direction: column;
      & div {
        a {
          width: 100%;
        }
      }
    }
  }
`;
