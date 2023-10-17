import { styled } from "styled-components";
import { BackgraundQuizz, FlexComun, colors } from "../style/StyleGlobal";

export const QuizzContent = styled.section`
  height: 70vh;
  ${FlexComun}
  flex-direction:column;
  width: 70vw;
  .error-message {
    padding-top: 3em;
    font-size: 0.7em;
    color: red;
  }

  & > div {
    width: 100%;
    ${FlexComun}
    & > article {
      width: 80%;
      ${FlexComun}
      flex-direction:column;
      justify-content: start;

      & > h2 {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        background-color: ${colors.CC};
        color: ${colors.light};
        width: 100%;
        padding: 1em;
        position: relative;
        box-shadow: 0 5px 10px #000;
        border-radius: 0.5em 0.5em 0 0;
        & label {
          background-color: ${colors.BB};
          border-radius: 50%;
          width: 30px;
          height: 30px;
          content: "";
          position: absolute;
          bottom: -25%;
          color: #fff;
          ${FlexComun}
          z-index:5;
        }
      }
      & p {
        ${FlexComun}
        width:100%;
        height: 35vh;
        animation: slideIn 1s ease-in-out;
      }
      & > div {
        ${FlexComun}
        width: 100%;
        flex-direction: column;
        height: 45vh;
        ${BackgraundQuizz}
        & > section {
          width: 100%;
          ${FlexComun}
          flex-direction:column;
          height: 40vh;
          justify-content: start;
          padding: 2em;
          background-color: rgba(73, 39, 121, 0.699);
          color: #fff;
          height: 20vh;
          & article {
            ${FlexComun}
            width:100%;
            gap: 4em;

            
            & label {
                font-size:1em;
             
            }
          }
          & > div {
            ${FlexComun}
            width:100%;
            justify-content: space-around;

            & label {
              ${FlexComun}
              gap: 1em;
              width: 50%;
              justify-content: start;
            }
          }

          & button {
            padding: 0.5em 2em;
            background-color: transparent;

            border: solid 1px ${colors.light};
            border-radius: 0.5em;
            color: ${colors.light};
            cursor: pointer;
            ${FlexComun}
            gap:1em;
          }
        }
      }
    }
  }
`;
