import React from "react";
import styled from "styled-components";
import Header from '../Header'
import PromoBanner from "../PromoBanner";

const Main = styled.div`
  .product-grid{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* grid-column-gap: 10px; */
    background-color: #ffffff;
    margin: 10px;
    color: black;
    column-gap: 5px;
    .filter{
      margin-right: 10px;
      padding-bottom: 200px;
      background: rgb(233,233,233);
      background: linear-gradient(180deg, rgba(233,233,233,1) 0%, rgba(190,190,190,1) 100%);
    }
    .product-card{
      color: black;
      border: 1px solid black;
      background-color: white;
    }
  }
`

export default function ProductPage(){
  return(
    <Main>
      <Header />
      <PromoBanner/>
      <div className="product-grid">
        <div className="filter">Filter</div>
        <div className="product-card"><h2>1</h2></div>
        <div className="product-card"><h2>2</h2></div>
        <div className="product-card"><h2>3</h2></div>
        <div className="product-card"><h2>4</h2></div>
      </div>
    </Main>
  )
}