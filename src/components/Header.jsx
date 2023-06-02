import React from "react";
import styled from "styled-components";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";

const Header = styled.header`
  background: linear-gradient(219deg, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 35%, rgba(255,255,255,1) 70%, rgba(233,233,233,1) 100%);
  border-bottom: 1px solid #000000;
  text-transform: uppercase;
  z-index: 1;
  div {
    padding: 5px 30px;
    @media(max-width: 768px){
      padding: 5px;
      display: flex;
      justify-content: space-between;
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  .logo {
    padding: 0;
    display: flex;
    align-items: center;
    #icon {
      color: black;
      font-size: 2.3em;
      margin-right: 12px;
    }
    .title {
      a{
        letter-spacing: 4px;
        font-size: 0.65em;
        font-weight: 500;
        text-decoration: none;
        color: #000000;
        margin: 0;
      }
    }
  }
  .nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    @media (max-width: 768px){
      display: none;
    }
    justify-content: space-around;
    .nav-li {
      cursor: pointer;
      text-decoration: none;
      font-weight: 500;
      color: #686868;
      transition: color 0.5s linear;
    }
    .nav-li:hover {
      text-decoration: none;
      color: black;
    }
  }
  .auth {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: 180px;
    @media (max-width: 768px){
      margin: 0;
    }
    display: flex;
    justify-content: space-around;
    color: #686868;
    align-items: center;
    .auth-li {
      color: #686868;
      text-decoration: none;
      padding: 0px;
      transition: all 0.2s linear;
    }
    .auth-li:hover {
      color: black;
      cursor: pointer;
    }
  }
  .fsvinte {
    font-size: 20px;
  }
  .dsnone {
    display: none;
  }
`;

export default function Nav() {
  
  return (
    <Header>
      <div>
        <div className="logo">
          {/* <IoColorFilterSharp id="icon" /> */}
          <h1 className="title"><Link to="/">Fire Company.</Link></h1>
        </div>
        <ul className="nav">
          <Link to="/" className="nav-li">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-li">
            <li>Products</li>
          </Link>
          <Link to="/contact" className="nav-li">
            <li>Contact</li>
          </Link>
          <Link to="/aboutus" className="nav-li">
            <li>About Us</li>
          </Link>
        </ul>
        <ul className="auth">
          <Tooltip title="Search">
            <IconButton>
              <IoSearchOutline className="auth-li fsvinte"></IoSearchOutline>
            </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
            <IconButton>
              <IoCartOutline className="auth-li fsvinte"></IoCartOutline>
            </IconButton>
          </Tooltip>
          <Link className="auth-li">
            Login
          </Link>
        </ul>
      </div>
    </Header>
  );
}
