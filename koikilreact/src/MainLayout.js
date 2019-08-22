import React from "react";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";

const MainLayout = props => {
  return (
    <div>
      {/* MainLayout n'a pas besoin des user mais Header si, il faut donc que MainLayout recoive une props user pour pouvoir la passer a Header */}
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
