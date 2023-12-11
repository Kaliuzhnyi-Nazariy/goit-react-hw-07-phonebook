import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657602160febac18d403922b.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const result = await axios.get('/contacts');
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async ({ name, phone }, thunkApi) => {
    try {
      const result = await axios.post('/contacts', { name, phone });
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const result = await axios.delete(`/contacts/${id}`);
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);
