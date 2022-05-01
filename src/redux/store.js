import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist'
import { contactsReducer } from './contactsList/slice';
import { contactsFilterSlice } from './contactsFilter/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: contactsFilterSlice.reducer,
    },
});

export const persistor = persistStore(store);
