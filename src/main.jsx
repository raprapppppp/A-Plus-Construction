import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import Hero from "./components/Hero/Hero";
import Service from "./Pages/Services/Services";
import Project from "./Pages/Project/Project";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/product", element: <Product /> },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
