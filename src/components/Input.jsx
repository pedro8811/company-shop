import React from "react";
import styled from "styled-components";

const Main = styled.input`
  outline: none;
  padding: 16px 20px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;

  background-color: #f0f2f5;
  border: none;
`;

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <Main
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    ></Main>
  );
}
