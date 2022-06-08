import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            nemo officia architecto sint non delectus illum ad, animi enim
            soluta ea doloremque, quibusdam officiis quos voluptate beatae
            necessitatibus repellat earum.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">Link1</a>
              </li>
              <li>
                <a href="#">Link1</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
