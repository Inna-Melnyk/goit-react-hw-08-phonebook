import styled from '@emotion/styled';

export const Item = styled.li`
  margin: 0;
  padding: 8px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border: 1px solid gray;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

`;

export const Text = styled.p`
  text-transform: capitalize;
  margin: 0;
  margin-right: auto;
`;

export const DeleteBtn = styled.button`
  display: block;
  margin: 0;
  min-width: 70px;
  padding: 8px 10px;
  cursor: pointer;
  border-radius: 8px;
  border-color: orangered;
  text-transform: capitalize;
  
  &:hover {
    transform: /scale(1.9);
    background-color: rgb(233, 233, 233);
    color: red;
  }
  > span{
  }
`;