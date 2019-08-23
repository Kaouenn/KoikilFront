import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";

class SignUpPage extends React.Component {
  // on garde un state pour chaque input
  state = {
    lastName: "",
    name: "",
    email: "",
    password: "",
    passwordBis: "",
    phoneNumber: "",
    adress: "",
    postCode: "",

    // ce state permet d'afficher des erreur de validation seulement une fois que l'utilisateur a cliqué sur "Login"
    // au lieu d'afficher une erreur des la premiere touche
    submited: false,
    // si le mail/password est invalide on utilise ce state pour afficher l'erreur
    error: null
  };

  // On utilise le meme handleInputChange pout tous les inputs
  handleInputChange = event => {
    const type = event.target.type;
    // on récupère la value, si c'est un input de type `checkbox` on utilise event.target.checked au lieu de event.target.value
    const value =
      type === "checkbox" ? event.target.checked : event.target.value;
    // pour savoir quel input a été changé on regarde event.target.name (propriété "name" passé a l'input <input name="password" />)
    this.setState({ [event.target.name]: value });
  };

  // lorsque le formulaire est envoyé
  handleSubmit = async event => {
    // on empeche de comportement par defaut qui provoque un rechargement de la page
    event.preventDefault();
    // validation du mot de passe
    const passwordMismatch = this.state.password !== this.state.passwordBis;
    console.log(passwordMismatch);
    // si la confirmation du mot de passe est invalide on fait change le state submited
    if (passwordMismatch) {
      this.setState({ submited: true });
      return;
    }
    // console.log(this.state);
    this.setState({ error: null });
    try {
      // on appelle l'API pour valider le mail/password
      console.log(this.state);
      const response = await axios.post(
        "https://koikil.herokuapp.com/signupUser",
        {
          lastName: this.state.lastName,
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber,
          adress: this.state.adress,
          postCode: this.state.postCode
        }
      );
      console.log(response.data);
      // si l'API ne retourne pas d'erreur on change le state `user` de App
      this.props.setUser(response.data);
    } catch (error) {
      // en cas d'erreur on garde l'erreur dans le state pour pouvoir l'afficher
      console.log(error.message);
      this.setState({ error: error });
    }
  };

  render = () => {
    const passwordMismatch = this.state.password !== this.state.passwordBis;

    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="allcontain-singup">
          <div className="signup-left">
            <h1 className="title-signup">
              Inscrivez-vous pour <br />
              <span>bénéficier des produits Koikil</span>
            </h1>
          </div>
          <div className="signup-right">
            <form className="form-login" onSubmit={this.handleSubmit}>
              <div className="nom-prenom">
                <div className="input-div-nom">
                  <input
                    className="input-prenom-signup"
                    type="text"
                    name="lastName"
                    placeholder="Nom"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
                <div className="input-div-prenom">
                  <input
                    className="input-prenom-signup"
                    type="text"
                    name="name"
                    placeholder="Prenom"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="input-div">
                <input
                  className="input-signup"
                  type="mail"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
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
                  type="number"
                  name="phoneNumber"
                  placeholder="Numéro de téléphone portable"
                  value={this.state.phoneNumber}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="text"
                  name="adress"
                  placeholder="Adresse"
                  value={this.state.adress}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  className="input-signup"
                  type="text"
                  name="postCode"
                  placeholder="Code postal"
                  value={this.state.postCode}
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
            <Link className="deja-inscrit" to="/log_in">
              Déjà inscrit ? Je me connecte !
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default SignUpPage;
