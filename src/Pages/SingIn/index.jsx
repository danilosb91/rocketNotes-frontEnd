import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";

export function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = useAuth();
  console.log("danilo",data);

 const { singIn } = useAuth();

   function handleSingIn() {
     singIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para Salvar e gerenciar seus links</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="Password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" />

        <Link to="/register" onClick={handleSingIn}>
          Criar conta
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
