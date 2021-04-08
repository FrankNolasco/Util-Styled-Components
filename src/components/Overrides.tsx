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
export const H1 = styled.h1`
    padding : 0;
    margin : 0;
    font-family : "Roboto";
    font-size:30px;
    font-weight : ${(props : IOverrideHeading) => props.bold ? "bold" : "500"};
    line-height:40px;
`

export const H2 = styled(H1)`
    font-size: 22px;
    font-weight : ${(props : IOverrideHeading) => props.bold ? "bold" : "500"};
    line-height: 25px;
`

export const H3 = styled(H2)`
    font-size: 18px;
    line-height: 20px;
`
export const H4 = styled(H3)`
    font-size: 15px;
    line-height: 18px;
`
export const H5 = styled(H4)`
    font-size: 10px;
    line-height: 12px;
`

export const H6 = styled(H5)`
    font-size: 8px;
    line-height: 10px;
`