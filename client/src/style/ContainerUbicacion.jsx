import React from "react";
import styled from "styled-components";
import { colors } from "./StyleGlobal";

export const ContainerUbicacion = styled.div`
  padding: 20px;
  width: 100%;
  height: 80vh;
  & > div {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    color: ${colors.BB};
    font-size: 22px;
    gap: 4em;
    & input {
      outline: none;
      width: 70%;
      margin: 0 auto;
      border: solid 1px #0005;
      padding: 0.2em 0.5em;
    }
  }
  & aside {
    height:70vh;
    overflow-y:scroll;
    & > table {
      width: 100%;
      border-collapse: collapse;
      table-layout: fixed;
      font-size: 0.8em;

      & > thead {
        height: 40px;
        background: ${colors.CC};
        color: ${colors.light};
        box-shadow: 0 5px 10px #000;
        font-weight: lighter;
        font-size: 0.8em;

        text-transform: uppercase;
      }
      & > tbody {
        height: 100%;
        text-align: center;
        & input {
          border: solid 1px #0004;
          padding: 0.2em 1em;
          outline: none;
        }
        & select {
          background-color: ${colors.CC};
          color: ${colors.light};
          padding: 0.2em 1em;
          border: none;
          margin: 1em auto;
          outline: none;
        }
        tr {
          height: 50px;
          font-weight: lighter;

          &:nth-child(even) {
            background-color: rgba(53, 19, 90, 0.219);
          }
          &:nth-child(odd) {
            background-color: #fff;
          }
          .agregando {
            background-color: ${colors.FF};
          }
          .acciones{
              display:flex;
              gap:1em;
            }
          & > td {
            height: 50px;
            overflow: hidden;
            text-overflow: ellipsis;
          
            &:nth-child(3) {
              align-content: center;
              & button {
                margin: 0 auto;
              }
            }

            &:nth-child(4) {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100px;
              gap: 1em;
            }
            .audio {
              padding: 0.5em;
            }
            a {
              text-decoration: none;
              background-color: ${colors.CC};
              color: #fff;
              /* padding: 0.2em; */
            }
            & img {
              width: 50px;
              padding-top: 5px;
              transition: all 1s ease-in-out;
              &:hover {
                transform: scale(1.5);
                z-index: 100;
                width: 100px;
              }
            }
            & button {
              width: 100px;
              height: 30px;
              background: transparent;
              border: 1px solid ${colors.CC};
              cursor: pointer;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 0.5em;
              &:hover {
                background: ${colors.CC};
                color: ${colors.light};
                opacity: 0.8;
              }
            }
          }
          color: ${colors.CC};
          &:hover {
            color: ${colors.CC};
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    & > h1 {
      padding: 2em;
    }
    & aside {
      width: 90vw;
      margin: 0 auto;
      overflow-x: scroll;

      & table {
        width: 1200px;
      }
    }
  }
`;
