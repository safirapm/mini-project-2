import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   BrowserRouter,
//   RouterProvider,
//   Outlet,
// } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">The Movie DB</Navbar.Brand>
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#features">Movies</Nav.Link>
//               <Nav.Link href="#pricing">List</Nav.Link>
//             </Nav>
//           </Container>
//         </Navbar>
//         <Outlet />
//       </>
//     ),
//     errorElement: <p>Page Not Found</p>,
//     children: [
//       {
//         path: "/",
//         element: <p>Home Page</p>,
//       },
//       {
//         path: "/profile",
//         element: (
//           <>
//             {localStorage.getItem("session") ? (
//               <p>Profile Page</p>
//             ) : (
//               "forbidden"
//             )}
//           </>
//         ),
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <App />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
