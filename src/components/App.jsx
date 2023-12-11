
import { ContactList } from './ContactList/ContactList';

import { ContactForm } from './ContactForm/ContactForm.js';
import { ContactFilter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/sellectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const isError = useSelector(selectError)

  // console.log(isLoading)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
      <div style={{margin: '24px'}}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && !isError && <b>Loading! Wait a sec...</b>}
      <ContactList/>
      </div>
    );
  }
