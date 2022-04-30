import { createSlice, nanoid } from "@reduxjs/toolkit";

export const contactsListSlice = createSlice({
    name: 'contact',
    initialState: [],
    reducers: {
        addContact: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: ({ name, number }) => {
                const id = nanoid();
                return { payload: { id, name, number } };
            },
        },
        removeContact(state, action) {
           return state.filter(({id}) => id !== action.payload);
        },
    },
});

export const { addContact, removeContact } = contactsListSlice.actions;

