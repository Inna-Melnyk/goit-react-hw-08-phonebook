import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 18px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

