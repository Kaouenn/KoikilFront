import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";

const NotFoundPage = props => {
  return (
    <MainLayout user={props.user} setUser={props.setUser}>
      <h1>404</h1>
      <h2>Page not found !</h2>
      <Link to="/">Retourner à la page d'accueil</Link>
    </MainLayout>
  );
};

export default NotFoundPage;
