import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Nav = [
  {
    id: 1,
    name: "Home",
    links: "/",
  },
  {
    id: 2,
    name: "About",
    links: "about",
  },
  {
    id: 3,
    name: "Product",
    links: "product",
  },
  {
    id: 4,
    name: "Services",
    links: "services",
  },
  {
    id: 5,
    name: "Project",
    links: "project",
  },
  {
    id: 6,
    name: "Blog",
    links: "blog",
  },
  {
    id: 7,
    name: "Contact",
    links: "contact",
  },
];

const NavMenu = () => {
  return (
    <div>
      <div className="container  hidden lg:block z-100">
        {/*NAV MENU */}
        <div className="bg-primary">
          <div className="flex items-center cursor-pointer text-white ">
            {Nav.map((nav) => (
              <NavLink
                key={nav.id}
                to={nav.links}
                className={({ isActive }) =>
                  isActive
                    ? "text-xl py-[16px] px-[25px] font-semibold bg-secondary"
                    : "text-xl py-[16px] px-[25px] font-semibold"
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {/*NAV HAMBURGER SECTION */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 text-lg font-bold py-3 p-5 sm:pl-10 bg-primary text-white">
          <GiHamburgerMenu className="w-[25px] h-[25px]" />
          <p>MENU</p>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
