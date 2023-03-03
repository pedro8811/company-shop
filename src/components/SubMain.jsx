import React from "react";
import styled from "styled-components";
import { Button } from "./styles.jsx";

const Main = styled.div`
  background: #020202;
  color: #fff;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid black;
  .img-container {
    grid-column: 1 / 7;
    img {
      width: 65%;
      margin-left: 120px;
      filter: grayscale(100%);
    }
  }
  .text-container {
    grid-column: 7 / 12;
    transform: translateX(-50px);
    h1 {
      font-size: 2em;
      letter-spacing: 4px;
      font-weight: lighter;
      text-align: left;
    }
    p{
      font-size: 1.2em;
    }
    button:hover{
      background: #fff;
      color: #000;
    }
  }
`;

export default function SubMain() {
  return (
    <Main>
      <div className="img-container">
        <img src={require('../assets/webp-imgs/model-fundo-preto.webp')} alt="" loading="eager" />
      </div>
      <div className="text-container">
        <h1>
          “The way you dress is an expression of your personality.”<br></br> - Alessandro
          Michele
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          error voluptate debitis, hic consequatur omnis delectus magni,
          laboriosam corporis nisi facilis! Impedit odit quod praesentium eos
          aliquam aperiam sint. Sit!
        </p>
        <Button bdColor="" fontSize="1.2em" color="#fff" bgColor="#000">
          More information
        </Button>
      </div>
    </Main>
  );
}
