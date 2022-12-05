import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <p>Navbar</p>
        <Outlet />
      </>
    ),
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <p>Home Page</p>,
      },
      {
        path: "/profile",
        element: (
          <>
            {localStorage.getItem("session") ? (
              <p>Profile Page</p>
            ) : (
              "forbidden"
            )}
          </>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
