import { Container, Form, Background } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiMail, FiLock } from 'react-icons/fi'

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para Salvar e gerenciar seus links</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder="Email"
                type="text"
                icon={FiMail}/>
                
                <Input 
                placeholder="Senha"
                type="Password"
                icon={FiLock}/>
                
                <Button title="Entrar" />

            <a href="#">Criar conta</a>
              
            </Form>
<Background/>

        </Container>
    )
}