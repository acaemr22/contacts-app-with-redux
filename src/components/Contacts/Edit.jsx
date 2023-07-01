import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "./EditForm";

const Edit = () => {
  return (
    <div>
      <h1 className="font-semibold text-xl">Edit</h1>
      <EditForm />
    </div>
  );
};

export default Edit;
