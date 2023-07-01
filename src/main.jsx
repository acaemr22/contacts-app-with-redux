import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Edit from "./components/Contacts/Edit.jsx";
import Contacts from "./components/Contacts/index.jsx";
import Error from "./components/Contacts/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Contacts />,
      },
      {
        path: "/edit/:id",
        element: <Edit />,
      },
    ],
  },
  {
    path: "*",
    element: <Error/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
