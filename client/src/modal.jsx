import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
import { FlexComun, colors } from "./style/StyleGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <div>
          <section>
            <button onClick={() => setOpenModal(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <p>{titulo}</p>
          </section>
          <aside>{contenido}</aside>
        </div>
      </DivModalContainer>
    );
};

export default Modal;

const DivModalContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  margin: 0 auto;
  z-index: 100;
  animation: inicioModal 1s ease-in-out;
  background-color: #fff;
  left: 14%;
  @keyframes inicioModal {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(50%);
    }
  }
  & > div {
    width: auto;
    height: auto;
    padding: 1em;
    position: relative;
    & > section {
      padding: 1em;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px #0005;
      & > button {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: none;
        background-color: ${colors.BB};
        color: #fff;
        cursor: pointer;
      }
      & p {
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7em;
        color: ${colors.BB};
        font-weight: bold;
        padding: 0em 0;
      }
    }
    ${FlexComun}
    flex-direction:column;
    & aside {
      ${FlexComun}
      height:auto;
      width: 100%;
      & > section {
        ${FlexComun}
        flex-direction:column;
        width: 100%;
        height: 100%;
        color: ${colors.CC};
        padding: 1em;
        gap: 1em;
        & p {
          ${FlexComun}
          background-color:${colors.BB};
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: #fff;
          animation: animloader 2s ease;
        }
        & div {
          text-align: center;
        }
      }
    }
  }
  .cambioorganizacion {
    width: 80vw;
    display: flex;
    flex-direction: row;
    padding: 2em;
    flex-wrap: wrap;
    gap: 1em;
    border: solid 1px #0003;
    & select {
      width: 100%;
      border: none;
      box-shadow: 0 2px 10px 1px#0005;
      background-color: ${colors.CC};
      color: #fff;
      padding: 0.5em;
      outline: none;
    }
    & p {
      width: 100%;
    }
    & button {
      background-color: ${colors.CC};
      color: #fff;
      border: none;
      cursor: pointer;
      padding: 0.1em 3em;
    }
    .inputs {
      width: 80%;
      display: flex;
      gap: 1em;
      flex-wrap: wrap;
    }
    & input {
      width: 45%;
      padding: 0.5em;
      border: solid 1px #0003;
    }
    & section {
      width: 100%;
      display: flex;
    }
  }
  & table {
    width:95%;
    border-collapse: collapse;
    table-layout: fixed;
    font-weight: 100;
    font-weight: lighter;
    margin: 0 auto;
    & thead {
      font-weight: lighter;
      & tr,
      td,
      th {
        font-weight: 100;
        padding: 0 0.5em;
        font-size: 0.96em;
      }

      & tr,
      th {
        border: solid 1px #0005;
      }
    }
    & tbody {
      font-weight: lighter;
      & tr,
      th {
        font-weight: lighter;
        font-size: 0.9em;
        padding: 1em 0;
        border: solid 1px #0005;
      }
    }
  }
  .a {
    background-color: ${colors.CC};
    color: #fff;
  }
`;
