import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    contacts: {
        items: []
    }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initial_state,
    reducers: {
        addContact(state, action) {
            state.contacts.items.push(action.payload)
        },
        deleteContact(state, action) {
            state.contacts.items = state.contacts.items.filter(contact => contact.id != action.payload)
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer