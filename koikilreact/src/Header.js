import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render = () => {
    return (
      <header>
        <nav>
          <div className="logo">
            <h1>
              <Link className="link-logo" to="/">
                Koikil
              </Link>
            </h1>
          </div>
          <div className="groupe1-header">
            <div>
              <Link className="link-header" to="/">
                Accueil
              </Link>
            </div>
            <div>
              <Link className="link-header" to="/">
                Assure Ton Permis !
              </Link>
            </div>
          </div>
          <div className="groupe2-header">
            <div className="button-header">
              <Link className="link-button-header" to="/sign_up">
                Inscription
              </Link>
            </div>
            <div className="button-header">
              <Link className="link-button-header" to="/log_in">
              Connexion
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  };
}

export default Header;
