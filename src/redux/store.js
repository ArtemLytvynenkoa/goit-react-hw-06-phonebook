import { configureStore } from '@reduxjs/toolkit';
import { contactsListSlice } from './contactsList/slice';
import { contactsFilterSlice } from './contactsFilter/slice';

export const store = configureStore({
    reducer: {
        contacts: contactsListSlice.reducer,
        filter: contactsFilterSlice.reducer,
    },
})
