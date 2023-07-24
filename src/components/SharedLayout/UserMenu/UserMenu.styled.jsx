import styled from '@emotion/styled';



export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  font-size: 20px;
  font-weight: 500;

  > p {
    padding: 0;
    margin: 0;
    vertical-align: middle;
    > span {
      color: orangered;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  padding: 4px 18px;
  border-radius: 8px;
  border-color: orangered;
  cursor: pointer;
  > p {
    padding: 0;
    margin: 0;
  }

  &:hover {
    color: red;
    /* background-color: orangered; */
  }
`;

