// import { Container } from "./styles";

// export function Button({ title, loading = false, ...rest }){

//     return(
//     <Container
//     type="button"
//     disabled={loading}
//     >
//     { loading ? 'Carregando...' : title}

//     </Container>);
// }

import { Container } from "./styles";

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
