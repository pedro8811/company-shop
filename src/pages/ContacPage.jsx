import React from "react";
import styled from "styled-components";
import Header from '../components/Header'
import banner from '../../src/assets/webp-imgs/mulher-banner1.webp'
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Button } from "../components/styles";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = styled.div`
  margin: 0;
`

const Container = styled.div`
  background: rgb(255,255,255);
  background: linear-gradient(234deg, rgba(255,255,255,1) 0%, rgba(231,231,231,1) 35%, rgba(255,255,255,1) 70%, rgba(238,238,238,1) 100%);
  margin: 45px auto;
  width: 58%;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 0 0 5px rgba(0,0,0,.5);
  align-items: center;
  border-radius: 25px;
  img{
    width: 100%;
    border-radius: 29px 0px 0px 29px;
  }
`

const FormSection = styled.div`
  padding: 20px;
  button{
    text-align: center;
    margin-top: 5px;
    border: 1px solid black;
    width: 60%;
    &:hover{
      color: #000;
      background-color: #fff;
    }
    &:disabled{
      color: grey;
      background: #d6d6d6;
      border: grey 1px solid;
    }
  }
`

const Title = styled.h1`
  font-weight: 300;
  font-size: 2.2em;
  text-align: center;
  margin: 0 auto;
`

const Text = styled.p`
  text-align: justify;
  font-size: 1.1em;
  margin: 10px 0px;
`

const Label = styled.label`
  margin: 5px 0px;
  font-size: 1em;
`

const Form = styled.form`
  margin: 0 auto;
  input{
    margin-bottom: 5px;
    font-size: 14px;
    border: 1px solid black;
    border-radius: 8px;
    padding: 5px;
    width: 100%;
  }
  span{
    font-family: 'Lora';
  }
`

const DoubleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 15px;
  margin: 0;
`

export default function ContactPage(){

  return(
    <Main>
      <Header></Header>
      <Container>
        <img src={banner} alt="" />
        <FormSection>
          <Title>Subscribe to our newsletter</Title>
          <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto doloremque soluta reiciendis sapiente amet nisi dolorem sequi hic quidem temporibus eligendi, nulla ab modi impedit numquam, repellat corrupti non unde.</Text>
          <Form action="">
            <Label htmlFor="email">E-mail*</Label>
            <input className="" type="email" name="email" required/>
            <DoubleGrid>
              <div>
                <Label htmlFor="nome">Name*</Label>
                <input type="text" name="nome" required/>
              </div>
              <div>
                <Label htmlFor="phone">Phone number*</Label>
                <input type="tel" name="phone" required/>
              </div>
            </DoubleGrid>
            <FormGroup>
              <FormControlLabel className="formControl"
                control={<Checkbox color="default" id="check-first" required/>}
              label='I agree with all terms and conditions' />
            </FormGroup>
            <Button id="buttondi" addBorder fontSize="1.2em" color="#fff" bgColor="#000" type="none" >Sign</Button>
          </Form>
        </FormSection>
      </Container>
    </Main>
  )
}