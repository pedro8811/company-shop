import React from "react";
import styled from "styled-components";
import water from '../assets/img/water.webp'
import modelo from '../assets/img/modelo.png'

const Content = styled.div`
  background: #fff;
  margin: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  border-bottom: 1px solid black;
  p{
    font-size: 3em;
  }
  .modelfoto{
    grid-column-start: 6;
    grid-column-end: 11;
    font-size: 1em;
    /* https://e7.pngegg.com/pngimages/353/962/png-clipart-name-julija-female-woman-model-others-miscellaneous-fashion.png */
    img{
      width: 83%;
      filter: grayscale(100%);
    }
  }
`

export default function Main(){
  return(
    <Content>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <div className="modelfoto">
          <img src={modelo} alt="" />
        </div>
        <p>11</p>
        <p>12</p>
    </Content>
  )
}