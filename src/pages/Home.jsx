import React from "react";
import Nav from "../components/Header";
import Main from "../components/Main";
import SubMain from "../components/SubMain";
import Collections from "../components/Collections";
import Footer from "../components/Footer";

export default function Home(){
  return(
    <div>
      <Nav></Nav>
      <Main></Main>
      <SubMain></SubMain>
      <Collections></Collections>
      <Footer></Footer>
    </div>  
  )
}