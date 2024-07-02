import React from "react";
import Header from "./components/Header/Header";
import TopFooter from "./components/TopFooter/TopFooter";
import { Outlet } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <TopFooter />
      <NavMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
