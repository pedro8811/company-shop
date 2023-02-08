import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 420px;
  .right-label{
    text-align: center;
    margin: 0;
    padding-top: 6%;
    font-size: 70px;
    font-weight: 200;
    left: 320px;
    color: #ffffff;
    z-index: 1;
    position: absolute;
  }
  .left-label{
    text-align: center;
    margin: 0;
    padding-top: 17%;
    font-size: 30px;
    font-weight: 200;
    right: 320px;
    color: #ffffff;
    z-index: 1;
    position: absolute;
    p{
      text-transform: uppercase;
      display: inline;
    }
  }
  img{
    filter: grayscale(100%);
    height: 420px;
    position: relative;
    width: 100%;
    opacity: 1;
    object-fit: cover;
  }
`

export default function PromoBanner(){
  return(
    <Main>
      <label className="right-label">Catalogue</label>
      <img src={require('../assets/img/mulher-banner.jpg')} />
      <label className="left-label">20% OFF with <br/><p>newsite</p> cupom</label>
    </Main>
  )
}