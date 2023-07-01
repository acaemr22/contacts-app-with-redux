import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(addContact({ name, id: nanoid(), phoneNumber: number }));
    setName("");
    setNumber("");
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-y-2 py-2"
      >
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border-2 rounded-md border-solid p-1 px-2"
        />
        <input
          placeholder="phone number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          className="border-2 rounded-md border-solid p-1 px-2"
        />
        <button className="p-1 px-3 bg-green-600 text-white my-2 rounded-lg" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
