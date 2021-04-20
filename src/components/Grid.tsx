import styled from "styled-components";
import { IGrid } from "../types/Interfaces";
import { Div } from "./Overrides";

export const Grid = styled(Div)`
    display : grid;
    grid-template-columns: ${(props : IGrid) => `repeat(${props.cols},1fr)`};
`