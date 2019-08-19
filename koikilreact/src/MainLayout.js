import React from "react";
import Header from "./Header";
import "./index.css";

const MainLayout = props => {
  return (
    <div>
      {/* MainLayout n'a pas besoin des user mais Header si, il faut donc que MainLayout recoive une props user pour pouvoir la passer a Header */}
      <Header />
      <div className="content">{props.children}</div>
      <footer>Le footer</footer>
    </div>
  );
};

export default MainLayout;
