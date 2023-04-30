import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
