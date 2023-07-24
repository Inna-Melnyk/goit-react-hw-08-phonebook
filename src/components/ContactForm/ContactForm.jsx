import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  Contact,
  Form,
  FormField,
  ErrorMessage,
  SubmitBtn,
} from './ContactForm.slyled';

import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { toast } from 'react-hot-toast';

const nameRegex = RegExp(
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
);
const phoneRegex = RegExp(
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
);

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore  d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .min(5, 'Too short')
    .matches(
      phoneRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone is required'),
});

export const ContactForm = ({ title }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        const contactNames = contacts.map(contact =>
          contact.name.toLowerCase()
        );
        if (contactNames.includes(values.name.toLowerCase())) {
          toast.error(`${values.name} is already in contacts!`);
          return resetForm();
        } else {
          dispatch(addContact(values));
        }

        resetForm();
      }}
    >
      <Form>
        <Title>{title}</Title>

        <Contact>
          Name
          <FormField name="name" type="text" />
          <ErrorMessage name="name" component="span" />
        </Contact>

        <Contact>
          Number
          <FormField type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </Contact>

        <SubmitBtn type="submit">Add Contact</SubmitBtn>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  title: PropTypes.string.isRequired,
};
