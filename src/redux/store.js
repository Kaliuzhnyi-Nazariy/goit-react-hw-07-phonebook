import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducers } from './contactsSlice';
import { filterReducer } from './fitlerSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsReducers,
    filter: filterReducer,
  },
});
