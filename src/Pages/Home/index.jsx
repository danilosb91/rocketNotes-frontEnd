import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

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
      <Content>
      <Section title="Minhas Notas">
    <Note data={{
      title: 'React', 
      tags:[
      {id:'1', name:'react'},
      {id:'2', name:'Rocketseat'}
    ]
  }}
  />

  
      </Section>

      </Content>
      <NewNote to="/new">
      <FiPlus/>
      Criar Nota     
        </NewNote>
    </Container>
  );
}
