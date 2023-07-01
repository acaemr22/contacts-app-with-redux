import React from "react";
import { contactsSelector } from "../../redux/contactsSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { removeAllContacts } from "../../redux/contactsSlice";

const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector.selectAll);

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeAllContacts());
    }
  };

  return (
    <div className="my-4">
      {contacts[0] && (
        <div>
          <div
            onClick={handleDeleteAll}
            className="mb-3 cursor-pointer hover:font-semibold"
          >
            Remove All
          </div>
          <ul className="lg:mx-36 sm:mx-10 mx-2 flex flex-col bg-gray-900 text-white rounded-md divide-solid divide-y divide-blue-600">
            <div className="grid divide-x-2 grid-cols-3 py-2">
              <span className="">Name</span>
              <span>Phone</span>
              <span></span>
            </div>
            {contacts.map((contact) => (
              <Item
                key={contact.id}
                item={contact}
                onClick={() => useDispatch()}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default List;
