import styled from "styled-components";
import { IOverrideDiv, IOverrideHeading } from '../types/Interfaces'

// const recalculate = (width) => {
//     let extension = width ? width.substr(width.length-1,width.length) : "$";
//     if(extension === "%"){
//         return width.substr(0,width.length-1) > 50 ? "100%" : "50%"
//     }else{
//         return width
//     }
// }

export const Button = styled.button`
    cursor : pointer;
    :focus{
        outline : none;
    }
`
export const Div = styled.div`
    width : ${(props : IOverrideDiv)=> props.width ? props.width : "auto"};
    padding : ${(props : IOverrideDiv)=>props.padding ? props.padding : "0"};
    margin : ${(props : IOverrideDiv)=>props.margin ? props.margin : "0"};
    border : ${(props : IOverrideDiv)=>props.border ? props.border : "0"};
    @media (max-width: 768px) {
        width: ${(props) => props.responsive ? "100%" : props.width };
    }
`