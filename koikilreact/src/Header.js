import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render = () => {
    return (
      <header>
        {this.props.user === null ? (
          <nav>
            <div className="logo">
              <h1>
                <Link className="link-logo" to="/">
                  Koikil
                </Link>
              </h1>
            </div>
            <div className="groupe1-header">
              <Link className="link-header" to="/">
                Accueil
              </Link>

              <Link className="link-header" to="/assure-ton-permis">
                Assure Ton Permis !
              </Link>
            </div>
            <div className="groupe2-header">
              <Link className="link-button-header button-header" to="/sign_up">
                Inscription
              </Link>

              <Link className="link-button-header button-header" to="/log_in">
                Connexion
              </Link>
            </div>
          </nav>
        ) : (
          <nav>
            <div className="logo">
              <h1>
                <Link className="link-logo" to="/">
                  Koikil
                </Link>
              </h1>
            </div>
            <div className="groupe1-header-loged">
              <Link className="link-header" to="/">
                Accueil
              </Link>

              <Link className="link-header" to="/assure-ton-permis">
                Assure Ton Permis !
              </Link>
            </div>
            <div className="loged">
              <h2 className="loged-name"> {this.props.user.email} </h2>

              <div>
                <h2
                  className="deconnexion"
                  onClick={() => {
                    this.props.setUser(null);
                  }}
                >
                  Se deconnecter
                </h2>
              </div>
            </div>
          </nav>
        )}
      </header>
    );
  };
}

export default Header;
