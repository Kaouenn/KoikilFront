import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import "./index.css";

class SignUpPage extends React.Component {
  // on garde un state pour chaque input
  state = {
    username: "",
    email: "",
    password: "",
    adresse: "",
    postcode: "",
    passwordBis: "",

    // ce state permet d'afficher des erreur de validation seulement une fois que l'utilisateur a cliqué sur "Login"
    // au lieu d'afficher une erreur des la premiere touche
    submited: false,
    // si le mail/password est invalide on utilise ce state pour afficher l'erreur
    error: null
  };

  // // On utilise le meme handleInputChange pout tous les inputs
  // handleInputChange = event => {
  //   const type = event.target.type;
  //   // on récupère la value, si c'est un input de type `checkbox` on utilise event.target.checked au lieu de event.target.value
  //   const value =
  //     type === "checkbox" ? event.target.checked : event.target.value;
  //   // pour savaoir quel input a été changé on regarde event.target.name (propriété "name" passé a l'input <input name="password" />)
  //   this.setState({ [event.target.name]: value });
  // };

  // // lorsque le formulaire est envoyé
  // handleSubmit = async event => {
  //   // on empeche de comportement par defaut qui provoque un rechargement de la page
  //   event.preventDefault();
  //   // validation du mot de passe
  //   const passwordMismatch = this.state.password !== this.state.passwordBis;
  //   console.log(passwordMismatch);
  //   // si la confirmation du mot de passe est invalide on fait change le state submited
  //   if (passwordMismatch) {
  //     this.setState({ submited: true });
  //     return;
  //   }
  //   console.log(this.state);
  //   this.setState({ error: null });
  //   try {
  //     // on appelle l'API pour valider le mail/password
  //     const response = await axios.post(
  //       "https://leboncoin-api.herokuapp.com/api/user/sign_up",
  //       {
  //         email: this.state.mail,
  //         username: this.state.username,
  //         password: this.state.password
  //       }
  //     );
  //     console.log(response.data);
  //     // si l'API ne retourne pas d'erreur on change le state `user` de App
  //     this.props.setUser(response.data);
  //   } catch (error) {
  //     // en cas d'erreur on garde l'erreur dans le state pour pouvoir l'afficher
  //     console.log(error);
  //     this.setState({ error: error });
  //   }
  // };

  render = () => {
    const passwordMismatch = this.state.password !== this.state.passwordBis;

    return (
      <MainLayout>
        <div className="allcontain-singup">
          <div className="signup-left">
            <h1 className="title-signup">
              Inscrivez-vous pour <br />
              <span>bénéficiez des produits Koikil</span>
            </h1>
          </div>
          <div className="signup-right">
            <form onSubmit={this.handleSubmit}>
              <div className="nom-prenom">
                <div className="input-div-nom">
                  <input
                    className="input-prenom-signup"
                    type="text"
                    name="username"
                    placeholder="Nom"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input-div-prenom">
                  <input
                    className="input-prenom-signup"
                    type="text"
                    name="username"
                    placeholder="Prenom"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="input-div">
                <input
                  className="input-signup"
                  type="mail"
                  name="mail"
                  placeholder="Email"
                  value={this.state.mail}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="password"
                  name="password"
                  placeholder="Créer un mot de passe"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="password"
                  name="passwordBis"
                  placeholder="Confirmer mot de passe"
                  value={this.state.passwordBis}
                  onChange={this.handleInputChange}
                  required
                />
                {/* on affiche l'erreur uniquement si le formulaire a deja été soumis */}
                {this.state.submited && passwordMismatch && (
                  <p>Confirmation Invalide</p>
                )}
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="mail"
                  name="mail"
                  placeholder="Numéro de téléphone portable"
                  value={this.state.mail}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  sssss
                  type="mail"
                  name="mail"
                  placeholder="Adresse"
                  value={this.state.mail}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="mail"
                  name="mail"
                  placeholder="Code postal"
                  value={this.state.mail}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <button className="button-form" type="submit">
                  Je m'inscris !
                </button>
              </div>
              {/* Si le mail/pass est invalide on affiche l'erreur */}
              {this.state.error && <p>{this.state.error.message}</p>}
            </form>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default SignUpPage;
