import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Main = styled.div`

`

export default function ProductStars(props){
  
  let star = props.star
  
  return(
    <Main>
      {(() => {
        switch(star){
          case '0.5':
            return <div><BsStarHalf/><BsStar/><BsStar/><BsStar/><BsStar/></div>
            case '1':
              return <div><BsStarFill/><BsStar/><BsStar/><BsStar/><BsStar/></div>
              case '1.5':
                return <div><BsStarFill/><BsStarHalf/><BsStar/><BsStar/><BsStar/></div>
              case '2':
                return <div><BsStarFill/><BsStarFill/><BsStar/><BsStar/><BsStar/></div>
              case '2.5':
                return <div><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/><BsStar/></div>
              case '3':
                return <div><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/><BsStar/></div>
              case '3.5':
                return <div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/><BsStar/></div>
              case '4':
                return <div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStar/></div>
              case '4.5':
                return <div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></div>
              case '5':
                return <div><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></div>
        }
      })()}
    </Main>
  )
}