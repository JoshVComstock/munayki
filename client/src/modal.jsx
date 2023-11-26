import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
import { FlexComun, colors } from "./style/StyleGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <div>
          <section className="titulo">
            <FontAwesomeIcon icon={faArrowAltCircleLeft}  onClick={() => setOpenModal(false)}/>
            <p>{titulo}</p>
          </section>
          <aside>{contenido}</aside>
        </div>
      </DivModalContainer>
    );
};

export default Modal;

const DivModalContainer = styled.div`
position: fixed;
z-index:200;
top:0;
background-color:#0005;
width:100vw;
height:100vh;
${FlexComun}
& > div{
  background-color:#fff;
  & .titulo{
    display: flex;
    padding:1em;
    gap:2em;
    flex-direction:row-reverse;
    font-size:1.5em;
    box-shadow: 0 5px 10px #0005;
    & p{
      width:100%;
      font-size:.6em;

    }
  }
  & label{
font-size:.8em;
  }
}
  /* width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #0005;
  & aside{
    width: 100%;
    height:100%;
    background-color:#fff;
    z-index:100;
  } */
  /* & > div {
  width:30em;
  height:20em;
  }
  */
  .cambioorganizacion {
    width: 80vw;
    height:60vh;
    display: flex;
    flex-direction: row;
    padding: 2em;
    flex-wrap: wrap;
    gap: 1em;
    border: solid 1px #0003;
    justify-content: center;
    font-size:.8em;
    & select {
      width: 70%;
      border: none;
      box-shadow: 0 2px 10px 1px#0005;
      background-color: ${colors.CC};
      color: #fff;
      padding: 0.5em;
      outline: none;
      height:3em;
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
    width: 95%;
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
        font-size: 1em;
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
