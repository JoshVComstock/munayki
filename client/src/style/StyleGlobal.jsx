import { css, keyframes } from "styled-components";

export const colors = {
  A: "rgb(251,177,82)",
  AA: "rgb(241,134,32)",
  B: "rgb(234,85,123)",
  BB: "rgb(174,25,89)",
  C: "rgb(108,85,158)",
  CC: "rgb(73,39,121)",
  D: "rgb(77,192,223)",
  DD: "rgb(1,173,217)",
  F: "rgb(79,184,167)",
  FF: "rgb(0,152,120)",
  light: "#fff",
  black: "#000",
  trasparent: "transparent",
  gris:"#0002",
  gris2:"#0001",
  gray100:"#cce3de",
  gray200:"#a4c3b2",
  gray300:"#6b9080",
};



export const FlexComun = css`
display:flex;
justify-content:center;
align-items:center;
`;
export const PositcionComun = css`
content:"";
position:absolute;
`;
export const LoginGlobal = css`
 & > article {
      position: relative;
      width: 50%;
      height: 100%;
      background-color: #fff;
      overflow: hidden;
      box-shadow: 0 5px 10px #0008;
      z-index: 10;
      ${FlexComun}

      & > img{
     
    width:20em;
  }
      & > div:nth-child(1) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.BB};
        top: -4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(2) {
        ${PositcionComun}
        width:6em;
        height: 6em;
        background-color: ${colors.CC};
        top: 4em;
        right: -2em;
        border-radius: 50%;
      }
      & > div:nth-child(3) {
        ${PositcionComun}
        width:5em;
        height: 5em;
        background-color: ${colors.DD};
        bottom: 10em;
        left:-2em;
        border-radius: 50%;
      }
      & > div:nth-child(4) {
        ${PositcionComun}
        width:10em;
        height: 10em;
        background-color: ${colors.FF};
        bottom: 2em;
        left: -4em;
        border-radius: 50%;
      }
     
    }
    & > form {
      width: 50%;
      height: 90%;
      ${FlexComun}
      flex-direction:column;
      padding: 2em;
      gap: 1em;
      box-shadow: 0 5px 10px #0005;
      background-color: ${colors.gris2};
      & > h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 2em;
      }
      & > label {
        width: 100%;
      }
      & > div {
        ${FlexComun}
        gap:1em;
        width: 100%;
        & > input {
          width: 80%;
          padding: 0.5em;
          border: solid 1px #0005;
          outline: none;
          border-radius: .2em;
          background-color: ${colors.trasparent};
        }
        & > input:focus {
          border: none;
          border-radius: 0;
          border-bottom: solid 1px ${colors.CC};
        }
      }
      & button {
        padding: 0.5em 2em;
        border-radius: .2em;
        border: solid 1px ${colors.CC};
        cursor: pointer;
        margin-top: 1em;
        ${FlexComun}
        gap:1em;
        &:hover {
          background-color: ${colors.CC};
          border: solid 1px transparent;
          color: ${colors.light};
        }
      }
      & > p {
        width: 100%;
        cursor: pointer;
        text-align: center;
        border-bottom: solid 1px #0005;
        padding: 1em;
        font-size: 0.8em;
        &:hover {
          /* background-color: ${colors.CC}; */
          border-bottom: solid 1px ${colors.CC};

          color: ${colors.CC};
        }
      }
      position: relative;
      & .volver {
        ${FlexComun}
        gap:1em;
        background-color: ${colors.CC};
        border: solid 1px transparent;
        color: ${colors.light};
        border-radius: 0;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
`;


export const BackgraundQuizz = css`
background: rgba(226, 223, 223, 0.404);
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(4px);
border-radius: 10px;
border: 1px solid rgba(255, 255, 255, 0.18);
position: relative;
&::after {
  position: absolute;
  content: "";
  background-color: ${colors.CC};
  width: 0px;
  height: 0px;
  bottom: 5em;
  right: 5em;
  box-shadow: 0px 10px 80px 40px ${colors.CC};
}
&::before {
  position: absolute;
  content: "";
  background-color: ${colors.CC};
  width: 0px;
  height: 0px;
  top: 5em;
  left: 5em;
  box-shadow: 0px 10px 80px 40px ${colors.BB};
}
`
