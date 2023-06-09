import { RiShutDownLine } from "react-icons/ri";

import {useAuth} from "../../hooks/auth"
import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { singOut } = useAuth();
  return (
    <Container>
      <Profile to="/Profile">
        <img src="https://github.com/danilosb91.png" alt="foto do usuário" />
        <div>
          <span>Bem-Vindo</span>
          <strong>Danilo Barão</strong>
        </div>
      </Profile>
      <Logout onClick={singOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
