import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  background-color: white;
  max-width: 350px;
  padding: 50px;
  border-radius: 5px;
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

const LabelSingIn = styled.label`
  font-size: 16px;
  color: #676767;
`;

const LabelError = styled.label`
  font-size: 14px;
  color: red;
`;

const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if(!email | !emailConf | !senha){
      setError("Preencha todos os campos")
      return
    }else if(email !== emailConf){
      setError("Os e-maisl não são iguais")
      return;
    }

    const res = signup(email, senha)

    if(res){
      setError(res)
      return
    }
    
    alert("Usuário cadastrado com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Label>Sistema de Login</Label>
      <Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <LabelError>{error}</LabelError>
        <Button Text="Cadastrar-se" onClick={handleSignup} />
        <LabelSingIn>
          Já tem uma conta?
          <Strong>
            <Link to="/">&nbsp;Entre</Link>
          </Strong>
        </LabelSingIn>
      </Content>
    </Container>
  );
}
