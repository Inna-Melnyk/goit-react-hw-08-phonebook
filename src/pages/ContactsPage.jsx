import { useSelector, useDispatch } from 'react-redux';
import {
  selectVisibleCotacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Container } from './CommonStyles.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectVisibleCotacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm title={'phonebook'} />
      {isLoading && !error && (
        <Loader/>
      )}
      {filteredContacts && (
        <ContactsList title={'contacts'} contacts={filteredContacts} />
      )}
    </Container>
  );
};
