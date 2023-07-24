import styled from '@emotion/styled';
import myImagePath from '../images/background.jpg';

export const Background = styled.section`
  height: calc(100vh - 71px);
  margin: 0 auto;
  background: url(${myImagePath});
  background-size: cover;
`;
export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  padding: 40vh 16px;
`;
export const Title = styled.h1`
  font-size: 72px;
  margin: auto;
  font-family: 'Dancing Script', cursive;
`;
