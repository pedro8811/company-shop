import styled from "styled-components";

export const Button = styled.button.attrs(() => ({ type: "text" }))`
  font-family: "Lora";
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  border: ${props => (props.addBorder ? `1px solid black` : `1px solid white`)};
  padding: 10px;
  background-color: ${props => props.bgColor};
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;
