import React from "react";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteContact(item.id));
    }
  };

  return (
    <li className="text-white font-semibold py-2 gap-x-3 px-2 grid-cols-3 grid">
      <span className="first-letter:uppercase">{item.name}</span>
      <span className="">{item.phoneNumber}</span>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        <span className="col-span-1 sm:col-span-2 text-right cursor-pointer hover:italic">
          <Link to={"/edit/"+item.id}>Edit</Link>
        </span>
        <span
          onClick={handleDelete}
          className="text-white cursor-pointer font-normal bg-red-500 p-1 px-2 ml-auto col-span-1"
        >
          X
        </span>
      </div>
    </li>
  );
};

export default Item;
