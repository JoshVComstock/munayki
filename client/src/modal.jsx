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
  width: 30em;
  height: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 35%;
  z-index: 100;
  animation: inicioModal 0.8s ease-in-out;
  background-color: #fff;
  @keyframes inicioModal {
    0% {
      width: 0;
      height: 40em;
    }
    100% {
      width: 30em;
      border-radius: 0;
    }
  }
  & > div {
    width: 40rem;
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
        & div{
          text-align:center;
        }
      }
    }
  }
`;
