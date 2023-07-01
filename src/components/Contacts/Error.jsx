import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div>Page Not Found 404</div>
      <div>
        <Link to="/" className="hover:text-red-500 font-semibold">Return to home</Link>
      </div>
    </div>
  );
};

export default Error;
