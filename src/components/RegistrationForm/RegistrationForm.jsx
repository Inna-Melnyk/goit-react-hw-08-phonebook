import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Contact,
  Form,
  FormField,
  ErrorMessage,
  SubmitBtn,
} from './RegistrationForm.styled';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/authOperations';
import { toast } from 'react-hot-toast';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(5, 'Too Short!').required('Name is required'),
  email: Yup.string().email('Invalid email').required('E-mail is required'),
  password: Yup.string()
    .min(7, 'Too Short! Minimum 7 symbols.')
    .max(16, 'Too Long!')
    .required('Password is required'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispatch(signUpUser(values))
      .unwrap()
      .then(() => toast.success('Registratio successful'))
      .catch(() => toast.error('User already exist...'));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Contact>
          Name
          <FormField name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </Contact>

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

        <SubmitBtn type="submit">Continue</SubmitBtn>
      </Form>
    </Formik>

    // <form className={css.form} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
