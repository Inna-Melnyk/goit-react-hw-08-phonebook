import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Container } from './CommonStyles.styled';

export const Registration = () => {
  return (
    <Container>
      <h2>Create account</h2>
      <RegistrationForm />
    </Container>
  );
};
