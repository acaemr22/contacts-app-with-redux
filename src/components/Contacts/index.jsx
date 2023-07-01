import React from "react";
import Form from "./Form";
import List from "./List";
import { contactsSelector } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

const Contacts = () => {
  const total = useSelector(contactsSelector.selectTotal);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Contacts {total > 0 && `(${total})`}
      </h1>
      <Form />
      <List />
    </div>
  );
};

export default Contacts;
