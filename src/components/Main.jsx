import React from "react";
import styled from "styled-components";
import { Button } from "./styles";

const Content = styled.div`
  background: #F6F6F6;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid black;
  p{
    font-size: 3em;
  }
  .img-container{
    grid-column: 7 / 12;
    font-size: 1em;
    text-align: right;
    img{
      transform: translateY(4px);
      width: 92%;
      filter: grayscale(100%);
    }
  }
  .text-container{
    grid-column: 1 / 7;
    text-align: right;
    transform: translateX(0px);
    z-index: 1;
    h1{
      transform: translateX(60px);
      letter-spacing: 4px;
      font-size: 2.1em;
      font-weight: lighter;
    }
    p{
      transform: translateX(50px);
      font-size: 1.2em;
    }
    button{
      transform: translateX(50px);
    }
    button:hover{
      color: #fff;
      background-color: #000;
    }
  }
`

export default function Main(){


  return(
    <Content>
        <div className="text-container">
          <h1>A way of thinking in fashion design.</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora aut eaque dolorum quibusdam quasi dolor ipsam? Illum amet et totam dignissimos unde, quia enim, dolor temporibus, nostrum obcaecati minus explicabo.</p>
          <Button addBorder fontSize="1.2em" color="#000" bgColor="#F6F6F6">More information</Button>
        </div>
        <div className="img-container">
          <img src={require('../assets/webp-imgs/modelo-fundo-branco.webp')} alt="Modelo de jaqueta e óculos" loading="eager"/>
        </div>
    </Content>
  )
}