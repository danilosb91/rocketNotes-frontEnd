import { FiPlus } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>
      <Header></Header>
      <Menu>
        <li>
          <ButtonText title="Todos" isActive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJs" />
        </li>
      </Menu>
      <Search>
        
        <Input placeholder="Pesquisar Pelo Título" icon={FiPlus} ></Input>
      </Search>
      <Content></Content>
      <NewNote>
      <FiPlus/>
      Criar Nota
        
    

      </NewNote>
    </Container>
  );
}
