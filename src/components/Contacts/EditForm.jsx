import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { contactsSelector } from "../../redux/contactsSlice";
import { useParams } from "react-router-dom";
import { updateContact } from "../../redux/contactsSlice";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = useSelector((state) =>
    contactsSelector.selectById(state, id)
  );

  if (!contact) {
    return <Navigate to="/" />
  }

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.phoneNumber);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return false;
    dispatch(updateContact({ id, changes: { name, phoneNumber: number } }));
    setName("");
    setNumber("");
    navigate("/");
  };

  console.log(contact);

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
        <button
          className="p-1 px-3 bg-orange-500 my-2 rounded-lg"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;
