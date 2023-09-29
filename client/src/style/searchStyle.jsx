import styled from "styled-components"
import { colors } from "./StyleGlobal"
export const ContainerSearch=styled.div`

& > input {
        width: 400px;
          padding: 0.5em;
          border: solid 1px #0005;
          outline: none;
          border-radius: .2em;
          background-color: ${colors.trasparent};
          margin: 0 1rem;
        }
        & > input:focus {
          border: none;
          border-radius: 0;
          border-bottom: solid 1px ${colors.CC};
        }
`