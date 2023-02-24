import React from "react";
import styled from "styled-components";

const Main = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #323232;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  transition: all .1s linear;
  &:hover{
    background-color: #1e1e1e;
  }
`

export default function Button({Text, onClick, Type = "button"}){
  return(
    <Main type={Type} onClick={onClick}>
      {Text}
    </Main>
  )
}