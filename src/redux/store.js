import { configureStore } from '@reduxjs/toolkit';
import { persisiStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReduser from './contactsSlice';
import filterreduser from './filterSlice';
