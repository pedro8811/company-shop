import React from "react";
import Header from '../components/Header'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'

const FirstGrid = styled.div`
  margin: 30px;
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 20px;
  img{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 30px;
    float: left;
    width: 100%;
    grid-column: 1 / 4;
  }
`

const TextContainter = styled.div`
  padding: 20px;
  border-radius: 30px;
  background: rgb(201,201,201);
  background: linear-gradient(219deg, rgba(201,201,201,1) 0%, #d9d9d9 27%, rgba(255,255,255,1) 67%, #bfbfbf 100%);
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  grid-column: 4 / 10;
`

const SecondGrid = styled.div`
  margin: 30px;
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  column-gap: 20px;
  img{
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border-radius: 30px;
    float: left;
    width: 100%;
    grid-column: 7 / 10;
    filter: grayscale(100%);
  }
`
const SecondTextContainter = styled.div`
  padding: 20px;
  border-radius: 30px;
  background: rgb(74,74,74);
  background: linear-gradient(219deg, rgba(74,74,74,1) 0%, rgba(0,0,0,1) 27%, #303030 67%, rgba(27,27,27,1) 100%);
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  color: white;
  grid-column: 1 / 7;
`

export default function AboutUsPage(){
  return(
    <div>
      <Header></Header>
      <FirstGrid>
        <img src={require('../assets/webp-imgs/mulher-sentada.webp')} alt="" />
        <TextContainter>
          <div className="d-flex flex-row align-items-end">
            <h1>FIRE COMPANY</h1>
            <h4>and its origins</h4>
          </div>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia molestiae error placeat iusto facilis iste, vero nulla facere, at doloribus, amet veniam quae dolorem impedit corrupti. Perferendis, rem consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem corrupti, harum est, exercitationem, iste iure laudantium excepturi mollitia omnis voluptas quibusdam debitis accusantium deleniti porro laborum nobis recusandae optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a pariatur provident iure rerum, quae totam dolore distinctio esse soluta! Laboriosam asperiores sunt culpa iure hic ab voluptatum laborum quasi?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, magnam beatae! Molestias voluptates quibusdam aliquid quo magnam assumenda repudiandae sunt beatae, nulla vero tempora architecto a, sint fuga modi similique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam praesentium vel animi harum voluptatem est error cupiditate, ea fugit excepturi iste quibusdam maiores consequatur quasi? In culpa amet voluptatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia molestiae error placeat iusto facilis iste, vero nulla facere, at doloribus, amet veniam quae dolorem impedit corrupti. Perferendis, rem!
          </p>
        </TextContainter>
      </FirstGrid>
      <hr />
      <SecondGrid>
        <SecondTextContainter>
          <div className="d-flex flex-row align-items-end">
            <h1>OUR FIRST STEPS IN THE MARKET</h1>
          </div>
          <p className="fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia molestiae error placeat iusto facilis iste, vero nulla facere, at doloribus, amet veniam quae dolorem impedit corrupti. Perferendis, rem consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam rem corrupti, harum est, exercitationem, iste iure laudantium excepturi mollitia omnis voluptas quibusdam debitis accusantium deleniti porro laborum nobis recusandae optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a pariatur provident iure rerum, quae totam dolore distinctio esse soluta! Laboriosam asperiores sunt culpa iure hic ab voluptatum laborum quasi?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, magnam beatae! Molestias voluptates quibusdam aliquid quo magnam assumenda repudiandae sunt beatae, nulla vero tempora architecto a, sint fuga modi similique.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam praesentium vel animi harum voluptatem est error cupiditate, ea fugit excepturi iste quibusdam maiores consequatur quasi? In culpa amet voluptatibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis mollitia molestiae error placeat iusto facilis iste, vero nulla facere, at doloribus, amet veniam quae dolorem impedit corrupti. Perferendis, rem!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt aliquid, consequuntur est mollitia inventore totam architecto adipisci! Repudiandae architecto optio eaque possimus corrupti, dolorum animi quod accusantium officia tenetur.
            Lorem ipsum dolor, sit amet consectetur!
          </p>
        </SecondTextContainter>
        <img src={require('../assets/webp-imgs/aboutus.webp')} alt="" />
      </SecondGrid>
      <Footer/>
    </div>
  )
}