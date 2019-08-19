import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Cookies from "js-cookie";

class App extends React.Component {
  // state = {
  //   user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null,
  // };

  // setUser = user => {
  //   Cookies.set('user', JSON.stringify(user));
  //   this.setState({ user });
  // };

  render = () => {
    // on créer un un objet qui permet de passer les memes props a plusieurs composants

    return (
      <BrowserRouter>
        {/* Rappel: le Switch permet de trouver la premiere Route qui match et d'ignorer les autres */}
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => {
              return <Home />;
            }}
          />

          {/* Si on est connecter (le state user est un objet) on redirige /sign_up vers / */}
          {/* {this.state.user !== null && <Redirect from="/sign_up" to="/" />} */}
          <Route path="/sign_up" render={() => <SignUpPage />} />
          {/* Si on est connecter (le state user est un objet) on redirige /sign_up vers / */}
          {/* {this.state.user !== null && <Redirect from="/log_in" to="/" />} */}
          <Route path="/log_in" render={() => <LoginPage />} />

          <Route render={() => <NotFoundPage />} />
        </Switch>
      </BrowserRouter>
    );
  };
}

export default App;
