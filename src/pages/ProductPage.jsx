import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PromoBanner from "../components/PromoBanner";
import { AiOutlineLeft } from "react-icons/ai";
import Footer from "../components/Footer";
import { IconButton, Tooltip } from "@mui/material";

const Main = styled.div`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(8, 1fr);
    grid-area: ". . . . .";
    background-color: #ffffff;
    margin: 20px;
    color: black;
    column-gap: 5px;
    row-gap: 5px;
    .filter {
      /* transform: translateX(0px); */
      border: 1px solid black;
      margin-right: 10px;
      padding: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      .gender-filter {
      }
    }
    .product-card {
      padding: 80px;
      color: black;
      border: 1px solid black;
      background-color: white;
    }
    .sub-card {
      color: #000000;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      border: 1px solid black;
      padding: 10px;
      transition: all 0.2s linear;
      h2 {
        margin: 0px 0px 10px 0px;
        font-weight: 100;
      }
      .check-box {
        font-size: 16px;
        margin-bottom: 5px;
      }
    }
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      user-select: none;
      h1 {
        margin: 0;
        font-weight: 200;
      }
      .icon-fs {
        padding: 5px;
        margin: 0;
        border-radius: 30%;
        font-size: 25px;
        color: #000;
        transition: all 0.2s linear;
        /* &:hover{
          border-radius: 30%;
          cursor: pointer;
          background-color: rgba(0,0,0,.2);
        } */
      }
    }
    .div1 {
      grid-area: 1 / 1 / 3 / 2;
    }
    .div2 {
      grid-area: 1 / 2 / 2 / 3;
    }
    .div3 {
      grid-area: 1 / 3 / 2 / 4;
    }
    .div4 {
      grid-area: 1 / 4 / 2 / 5;
    }
    .div5 {
      grid-area: 1 / 5 / 2 / 6;
    }
    .div6 {
      grid-area: 2 / 2 / 3 / 3;
    }
    .div7 {
      grid-area: 2 / 3 / 3 / 4;
    }
    .div8 {
      grid-area: 2 / 4 / 3 / 5;
    }
    .div9 {
      grid-area: 2 / 5 / 3 / 6;
    }
    .div10 {
      grid-area: 3 / 2 / 4 / 3;
    }
    .div11 {
      grid-area: 3 / 3 / 4 / 4;
    }
    .div12 {
      grid-area: 3 / 4 / 4 / 5;
    }
    .div13 {
      grid-area: 3 / 5 / 4 / 6;
    }
    .div14 {
      grid-area: 4 / 2 / 5 / 3;
    }
    .div15 {
      grid-area: 4 / 3 / 5 / 4;
    }
    .div16 {
      grid-area: 4 / 4 / 5 / 5;
    }
    .div17 {
      grid-area: 4 / 5 / 5 / 6;
    }
    .div18 {
      grid-area: 5 / 2 / 6 / 3;
    }
    .div19 {
      grid-area: 5 / 3 / 6 / 4;
    }
    .div20 {
      grid-area: 5 / 4 / 6 / 5;
    }
    .div21 {
      grid-area: 5 / 5 / 6 / 6;
    }
    .div22 {
      grid-area: 6 / 2 / 7 / 3;
    }
    .div23 {
      grid-area: 6 / 3 / 7 / 4;
    }
    .div24 {
      grid-area: 6 / 4 / 7 / 5;
    }
    .div25 {
      grid-area: 6 / 5 / 7 / 6;
    }
    .div26 {
      grid-area: 7 / 2 / 8 / 3;
    }
    .div27 {
      grid-area: 7 / 3 / 8 / 4;
    }
    .div28 {
      grid-area: 7 / 4 / 8 / 5;
    }
    .div29 {
      grid-area: 7 / 5 / 8 / 6;
    }
    .div30 {
      grid-area: 8 / 2 / 9 / 3;
    }
    .div31 {
      grid-area: 8 / 3 / 9 / 4;
    }
    .div32 {
      grid-area: 8 / 4 / 9 / 5;
    }
    .div33 {
      grid-area: 8 / 5 / 9 / 6;
    }
  }
`;

export default function ProductPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Main>
      <Header />
      <PromoBanner />
      <div className="product-grid">
        <div
          className="filter div1"
          style={{
            height: isOpen ? "50px" : "300px"
          }}
        >
          <div className="flex">
            <h1>Filter</h1>
            <Tooltip>
              <IconButton>
                <AiOutlineLeft
                  className="icon-fs"
                  onClick={toggle}
                  style={{
                    transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                ></AiOutlineLeft>
              </IconButton>
            </Tooltip>
          </div>
          <div className="sub-card" style={{ opacity: isOpen ? "0" : "1" }}>
            <h2>Gender</h2>
            <form>
              <div className="gender-filter">
                <input type="checkbox" />
                <label>Male</label>
              </div>
              <div className="gender-filter">
                <input type="checkbox" />
                <label>Female</label>
              </div>
            </form>
          </div>
        </div>
        <div className="product-card div2">
          <h2>1</h2>
        </div>
        <div className="product-card div3">
          <h2>2</h2>
        </div>
        <div className="product-card div4">
          <h2>3</h2>
        </div>
        <div className="product-card div5">
          <h2>4</h2>
        </div>
        <div className="product-card div6">
          <h2>5</h2>
        </div>
        <div className="product-card div7">
          <h2>6</h2>
        </div>
        <div className="product-card div8">
          <h2>7</h2>
        </div>
        <div className="product-card div9">
          <h2>8</h2>
        </div>
        <div className="product-card div10">
          <h2>9</h2>
        </div>
        <div className="product-card div11">
          <h2>10</h2>
        </div>
        <div className="product-card div12">
          <h2>11</h2>
        </div>
        <div className="product-card div13">
          <h2>12</h2>
        </div>
        <div className="product-card div14">
          <h2>13</h2>
        </div>
        <div className="product-card div15">
          <h2>14</h2>
        </div>
        <div className="product-card div16">
          <h2>15</h2>
        </div>
        <div className="product-card div17">
          <h2>16</h2>
        </div>
        <div className="product-card div18">
          <h2>17</h2>
        </div>
        <div className="product-card div19">
          <h2>18</h2>
        </div>
        <div className="product-card div20">
          <h2>19</h2>
        </div>
        <div className="product-card div21">
          <h2>20</h2>
        </div>
        <div className="product-card div22">
          <h2>21</h2>
        </div>
        <div className="product-card div23">
          <h2>22</h2>
        </div>
        <div className="product-card div24">
          <h2>23</h2>
        </div>
        <div className="product-card div25">
          <h2>24</h2>
        </div>
        <div className="product-card div26">
          <h2>25</h2>
        </div>
        <div className="product-card div27">
          <h2>26</h2>
        </div>
        <div className="product-card div28">
          <h2>27</h2>
        </div>
        <div className="product-card div29">
          <h2>28</h2>
        </div>
        <div className="product-card div30">
          <h2>29</h2>
        </div>
        <div className="product-card div31">
          <h2>30</h2>
        </div>
        <div className="product-card div32">
          <h2>31</h2>
        </div>
        <div className="product-card div33">
          <h2>32</h2>
        </div>
      </div>
      <Footer />
    </Main>
  );
}
