import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Text, DeleteBtn } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { DeleteLoader } from 'components/Loader/Loader';
import { useState } from 'react';

export const Contact = ({ values: { name, number, id } }) => {
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState('')
  const isLoading = useSelector(selectIsLoading)

  return (
    <Item key={id}>
      <Text>
        {name} : {number}
      </Text>
      <DeleteBtn
        onClick={() => {
          setContactId(id);
          dispatch(deleteContact(id)).then(() => {
            setContactId(null);
          });
        }}
      >
        {isLoading && contactId ? <DeleteLoader /> : <span>Delete</span>}      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
