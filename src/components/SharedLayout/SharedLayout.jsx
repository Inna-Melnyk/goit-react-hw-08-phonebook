import { Suspense } from 'react';
import { Container, Header, Logo, Link, Nav } from './SharedLayout.styled';
import { MdOutlineContactPhone } from 'react-icons/md';
import { BsPhoneVibrate } from 'react-icons/bs';

import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/SharedLayout/UserMenu/UserMenu';
import { AuthNav } from './AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Header id="header">
        <Container>
          <Nav>
            <Logo to="/">
              <MdOutlineContactPhone size="30" />
              <span>Phonebook</span>
            </Logo>
            {isLoggedIn && (
              <Link to="/contacts">
                <BsPhoneVibrate size="22" />
                <span>Contacts</span>
              </Link>
            )}
          </Nav>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
