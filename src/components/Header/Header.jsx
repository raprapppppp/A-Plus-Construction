import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-primary">
      <div
        className="container flex text-white py-4 items-center justify-end gap-4 font-semibold text-sm
      "
      >
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Header;
