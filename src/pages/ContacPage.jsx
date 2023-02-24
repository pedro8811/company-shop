import React from "react";
import styled from "styled-components";
import Header from '../components/Header'

const Main = styled.div`
  margin: 0;
`

export default function ContactPage(){
  return(
    <Main>
      <Header></Header>
      <h1>CONTACT PAGE</h1>
    </Main>
  )
}