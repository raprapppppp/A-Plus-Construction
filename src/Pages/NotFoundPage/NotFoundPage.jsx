import React from "react";
import { NavLink } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex w-full h-[100vh] bg-blue-100 justify-center items-center flex-col text-2xl">
      <h1>404 Not Found</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
    </div>
  );
};

export default NotFoundPage;
