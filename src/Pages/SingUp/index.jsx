import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SingUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para Salvar e gerenciar seus links</p>

                <h2>Crie sua conta</h2>

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}/>

                <Input 
                placeholder="Email"
                type="text"
                icon={FiMail}/>
                
                <Input 
                placeholder="Senha"
                type="Password"
                icon={FiLock}/>
                
                <Button title="Cadastrar" />

            <a href="#">Voltar para o Login</a>
              
            </Form>

        </Container>
    )
}