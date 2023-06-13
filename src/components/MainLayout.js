import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = (props) => {
  const { children, active } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;