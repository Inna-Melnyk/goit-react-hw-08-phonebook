import styled from '@emotion/styled';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';


export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 12px;

`;

export const Contact = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(FormikField)`
  width: 330px;
  padding: 8px;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;

export const SubmitBtn = styled.button`
  width: 350px;
  padding: 8px;
  background-color: #ff4400a9;
  border-color: orangered;
  color: white;
  font-size: 16px;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    transform: /scale(1.9);
    background-color: orangered;
    font-weight: bold;
  }
`;
