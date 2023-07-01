import { useState } from "react";
import Contacts from "./components/Contacts";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-gray-200 py-5">
      <Outlet />
      <footer>Copyright (c) 2023 Emre Açar</footer>
    </main>
  );
}

export default App;
