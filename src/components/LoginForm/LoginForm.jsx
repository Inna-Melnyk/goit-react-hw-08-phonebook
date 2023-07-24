import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Contact,
  Form,
  FormField,
  ErrorMessage,
  SubmitBtn,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('E-mail is required'),
  password: Yup.string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(logInUser(values))
      .unwrap()
      .then(() => toast.success('Login successful'))
      .catch(() => toast.error('Oops... Try again!'));

    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Contact>
          Email
          <FormField type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </Contact>

        <Contact>
          Password
          <FormField type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </Contact>

        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Form>
    </Formik>
  );
};
