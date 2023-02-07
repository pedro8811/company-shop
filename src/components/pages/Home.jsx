import React from "react";
import Nav from "../Header";
import Main from "../Main";
import SubMain from "../SubMain";
import Collections from "../Collections";

export default function Home(){
  return(
    <div>
      <Nav></Nav>
      <Main></Main>
      <SubMain></SubMain>
      <Collections></Collections>
    </div>  
  )
}