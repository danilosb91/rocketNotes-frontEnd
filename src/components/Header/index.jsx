import { RiShutDownLine } from "react-icons/ri";

import {useAuth} from "../../hooks/auth"
import { api } from "../../services/api";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { singOut, user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;  

  return (
    <Container>
      <Profile to="/Profile">
        <img src={avatarUrl} alt="{user.name}" />
        <div>
          <span>Bem-Vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={singOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
