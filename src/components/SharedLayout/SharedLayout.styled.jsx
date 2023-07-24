import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px 0;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const Header = styled.header`
  padding: 12px 0;
  border-bottom: 1px solid black;

`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 26px;

  &:hover {
    color: orangered;
    /* background-color: orangered; */
  }
  &.active {
    color: orangered;
    /* background-color: orangered; */
  }

  > span {
    @media screen and (max-width: 458px) {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;

  > span {
    vertical-align: baseline;
  }

  &:hover {
    color: orangered;
    /* background-color: orangered; */
  }
  &.active {
    color: orangered;
    /* background-color: orangered; */
  }
`;
