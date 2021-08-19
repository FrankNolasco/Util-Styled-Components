import styled from "styled-components";
import {
  IHeading,
  ITypografy,
  T_Heading,
  T_Typografy,
} from "../types/Interfaces";

const sizes = { h1: 30, h2: 22, h3: 18, h4: 15, h5: 10, h6: 8, span: 14, p: 14, label: 12, };

const calcularFontSize = (variant?: T_Typografy | T_Heading) => {
  let size = 14;
  variant && (size = sizes[variant] ? sizes[variant] : 14);
  return `${size}px`;
};

export const Heading = styled.h1<IHeading>`
  font-weight: bold;
  font-size: ${(props: IHeading) => calcularFontSize(props.variant)};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.textColor};
  margin: 0;
  padding: 0;
`;

export const Typography = styled.span<ITypografy>`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props: ITypografy) => calcularFontSize(props.variant)};
`;
