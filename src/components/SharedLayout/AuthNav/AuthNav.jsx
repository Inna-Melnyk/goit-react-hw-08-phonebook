import { Link, Wrapper } from './AuthNav.styled';
import { FiLogIn } from 'react-icons/fi';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/registration">
        <FiLogIn size="18" />
        <span>Registration</span>
      </Link>
      <Link to="/login">
        <FiLogIn size="18" />
        <span>Login</span>
      </Link>
    </Wrapper>
  );
};
