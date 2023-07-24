import { LoginForm } from "components/LoginForm/LoginForm";
import { Container } from "./CommonStyles.styled";

export const Login = () => {
    return (
      <Container>
        <h2>Hello, sign in!</h2>
        <LoginForm />
      </Container>
    );
};
