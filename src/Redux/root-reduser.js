import filterReducer from './Filter/filter-slice';
import contactReducer from './Contacts/contact-slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});
const persistConfig = {
  whitelist: ['contacts'],
  key: 'contacts',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;