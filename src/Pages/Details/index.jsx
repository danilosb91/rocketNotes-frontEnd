import { Container, Links, Content } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
            assumenda veniam placeat exercitationem eius sed vero quo animi
            aperiam doloremque modi reiciendis officia, unde eligendi qui optio?
            Sapiente, fugiat pariatur. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Est, assumenda veniam placeat exercitationem eius
            sed vero quo animi aperiam doloremque modi reiciendis officia, unde
            eligendi qui optio? Sapiente, fugiat pariatur.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Note" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
