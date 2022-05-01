import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsListSlice = createSlice({
    name: 'contact',
    initialState: {contacts: []},
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.contacts.push(action.payload);
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        removeContact(state, action) {
           state.contacts = state.contacts.filter(({id}) => id !== action.payload);
        },
    },
});

const persistConfig = {
    key: 'root',
    storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsListSlice.reducer);

export const { addContact, removeContact } = contactsListSlice.actions;

export const getContacts = state => state.contacts.contacts
