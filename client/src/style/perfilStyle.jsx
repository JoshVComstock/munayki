import styled from "styled-components";
import { colors } from "./StyleGlobal";

export const Containerperfil = styled.div`
display: flex;
flex-direction: row;
gap:2em;
&>div{
    margin: 0 1rem;
    width: 40px;
    height: 40px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &>img{
        width: 20px;
        height: 20px;
        filter: invert(55%) sepia(23%) saturate(358%) hue-rotate(102deg) brightness(92%) contrast(86%);
    }
    &>p{
        width: 15px;
        height: 13px;
        background: ${colors.B};
        border-radius: 50%;
        color: ${colors.light};
        font-size: 10px;
    text-align: center;
    position: absolute;
    top: 4px;
    left: 18px;
    }
}
&>img{
    width: 40px;
    height: 40px;
    border-radius: 5px;
}
`