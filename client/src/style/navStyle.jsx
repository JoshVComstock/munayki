import { styled } from "styled-components";
import { FlexComun, colors } from "./StyleGlobal";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
        font-size:.9em;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > nav {
    ${FlexComun}
    flex-direction:column;
    width: 230px;
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
      & > img {
        width: 80%;
      }
      & > h1 {
        font-size: 25px;
        margin: 1em;
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

        & > .active {
          transition: 0.5s;
          border-left: 5px solid ${colors.F};
          
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
          &:hover{
            &>img {
              filter: invert(39%) sepia(56%) saturate(1116%) hue-rotate(128deg)
                brightness(96%) contrast(101%);
            }
          }
          & > img {
            width: 25px;
            height: 25px;
            width: 25px;
            height: 25px;
            filter: invert(72%) sepia(11%) saturate(1727%) hue-rotate(121deg)
              brightness(89%) contrast(81%);
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
    }
  }
`;
export const Linkes = styled(NavLink)`
  ${FlexComun}
  justify-content:start;
  gap: 1em;
  color: ${colors.black};
  text-decoration: none;
  width: 80%;
  padding: 0.5em;
  margin-left: 1em;
  border-left: 5px solid transparent;
  
  & > img {
    width: 25px;
    height: 25px;
    filter: invert(72%) sepia(11%) saturate(1727%) hue-rotate(121deg)
      brightness(89%) contrast(81%);
  }
  &:hover > img {
    filter: invert(39%) sepia(56%) saturate(1116%) hue-rotate(128deg)
      brightness(96%) contrast(101%);
  }
`;
