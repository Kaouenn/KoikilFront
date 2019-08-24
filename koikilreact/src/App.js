import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Home from "./Home";
import AssureTonPermis from "./AssureTonPermis";
import Cookies from "js-cookie";
import UploadFiles from "./UploadFiles";
import UploadContract from "./UploadContract";

class App extends React.Component {
  state = {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null
  };

  setUser = user => {
    Cookies.set("user", JSON.stringify(user));
    this.setState({ user });
  };

  render = () => {
    const pageCommonProps = {
      // on pass le state user pour que le Header puisse afficher "se connecter" / "se deconnecter"
      user: this.state.user,
      // on passe setUser pour faire fonctionner le bouton "se deconnecter"
      setUser: this.setUser
    };
    // on créer un un objet qui permet de passer les memes props a plusieurs composants

    return (
      <BrowserRouter>
        {/* Rappel: le Switch permet de trouver la premiere Route qui match et d'ignorer les autres */}
        <Switch>
          {/* {this.state.user !== null && <Redirect from="/" to="/loged1" />} */}
          <Route
            path="/"
            exact={true}
            render={() => {
              return <Home {...pageCommonProps} />;
            }}
          />

          {this.state.user !== null && (
            <Redirect from="/assure-ton-permis" to="/loged1" />
          )}
          <Route
            path="/assure-ton-permis"
            render={() => <AssureTonPermis {...pageCommonProps} />}
          />
          {/* Si on est connecter (le state user est un objet) on redirige /sign_up vers / */}
          {this.state.user !== null && (
            <Redirect from="/sign_up" to="/loged1" />
          )}
          <Route
            path="/sign_up"
            render={() => <SignUpPage {...pageCommonProps} />}
          />
          {/* Si on est connecter (le state user est un objet) on redirige /sign_up vers / */}
          {this.state.user !== null && <Redirect from="/log_in" to="/loged1" />}
          <Route
            path="/log_in"
            render={() => <LoginPage {...pageCommonProps} />}
          />
          {this.state.user === null && <Redirect from="/loged1" to="/" />}
          <Route
            path="/loged1"
            render={() => <UploadFiles {...pageCommonProps} />}
          />

          <Route path="/upload" render={() => <UploadFiles />} />

          <Route path="/contract" render={() => <UploadContract />} />

          <Route render={() => <NotFoundPage />} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
