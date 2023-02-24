import React, {useState} from "react";
import styled from 'styled-components'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`

const Title = styled.h1`
  font-weight: 500;
  text-transform: uppercase;
  border-bottom: 1px solid black;
`

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0,0,0,.5);
  background-color: white;
  max-width: 350px;
  padding: 50px;
  border-radius: 5px;
`

const Label = styled.label`
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: #676767;
  `

const LabelSingUp = styled.label`
  font-size: 16px;
  color: #676767;
` 

const LabelError = styled.label`
  font-size: 14px;
  color: red;
`

const Strong = styled.strong`
  cursor: pointer;
  a{
    text-decoration: none;
    color: #676767;
  }
`

export default function SignIn(){
  const {signin} = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if(!email | !senha){
      setError("Preencha todos os campos")
      return;
    }

    const res = signin(email, senha)

    if(res){
      setError(res)
      return;
    }
  
    navigate("/home")
  }
  
  return(
    <Container>
      <Content>
        <Title className="title">Fire Company.</Title>
        <Label>login</Label>
        <Input
        type="email"
        placeholder="Digite seu E-mail"
        value={email}
        onChange={e => [setEmail(e.target.value), setError("")]}/>
        <Input
        type="password"
        placeholder="Digite sua Senha"
        value={senha}
        onChange={e => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button Text="Entrar" onClick={() => setTimeout(handleLogin, 2000)}/>
        <LabelSingUp>
          Não tem uma conta?
          <Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </Strong>
        </LabelSingUp>
      </Content>
    </Container>
  )
}