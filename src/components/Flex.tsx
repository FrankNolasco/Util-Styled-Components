import styled from "styled-components";
import { IFlex } from "../types/Interfaces";
import { Div } from "./Overrides";

export const Flex = styled(Div)`
  display: flex;
  justify-content: ${(props: IFlex) =>
    props.justifyContent ? props.justifyContent : "start"};
  gap: ${(props) => (props.gap ? props.gap : "0")};
  * {
    flex-grow: ${(props) => (props.grow ? 1 : 0)};
  }
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.responsiveReorder ? "column" : "row")};
  }
`;
export const Column = styled(Flex)`
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.responsiveReorder ? "row" : "column"};
  }
`;

export const Row = styled(Flex)`
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: ${(props) =>
      props.responsiveReorder ? "column" : "row"};
  }
`;

export const RowWrap = styled(Row)`
  flex-wrap: wrap;
`;
