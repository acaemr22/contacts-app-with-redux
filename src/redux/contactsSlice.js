import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState();

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: contactsAdapter.addOne,
    addContacts: contactsAdapter.addMany,
    deleteContact: contactsAdapter.removeOne,
    removeAllContacts: contactsAdapter.removeAll,
    updateContact: contactsAdapter.updateOne,
  },
});

export const { addContact, deleteContact, removeAllContacts, updateContact } =
  contactsSlice.actions;
export default contactsSlice.reducer;
export const contactsSelector = contactsAdapter.getSelectors(
  (state) => state.contacts
);
