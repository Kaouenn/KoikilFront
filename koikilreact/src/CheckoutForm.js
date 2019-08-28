// Créer un state ppour le input et a replecer dans le name .createToken
import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe
} from "react-stripe-elements";
import axios from "axios";
class CheckoutForm extends React.Component {
  state = {
    complete: false,
    inputValue: "",
    email: "",
    created: null
  };

  submit = async ev => {
    // User clicked submit
    // 2. on envoie le numéro de carte à Stripe
    const response = await this.props.stripe.createToken({
      name: this.state.inputValue
    });
    // 4. Stripe nous retourne un token
    console.log(response.token);
    this.setState({ created: response.token.created });
    // 5. on envoie ce token au backend
    try {
      const chargeRes = await axios.post(
        "https://koikil.herokuapp.com/charge",
        {
          token: response.token.id,
          email: this.state.email,
          name: this.state.inputValue
        }
      );
      // console.log(".config ? ===>", chargeRes.config.data);
      console.log(chargeRes.data);
      if (chargeRes.data.status === "succeeded") {
        this.props.setTime(this.state.created);
        this.setState({ complete: true });
      }

      // 10. Le backend nous confirme que le paiement a été effectué
      if (chargeRes.status === 15000) {
        this.setState({ complete: true });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    if (this.state.complete) {
      // 11. Le paiement est effectué
      return <Redirect to="/mon-espace" />;
    }
    return (
      <div className="checkout">
        <label className="cardElement">
          Titulaire de la carte
          <input
            name="name"
            type="text"
            placeholder="Nom, Prénom"
            required
            value={this.state.inputValue}
            onChange={event => {
              this.setState({ inputValue: event.target.value });
            }}
          />
        </label>
        <label className="cardElement">
          Votre email
          <input
            name="name"
            type="email"
            placeholder="email"
            required
            value={this.state.email}
            onChange={event => {
              this.setState({ email: event.target.value });
            }}
          />
        </label>

        <label className="cardElement">
          Numéro de carte de crédit
          <CardNumberElement />
        </label>
        <label className="cardElement">
          Date d’expiration
          <CardExpiryElement />
        </label>
        <label className="cardElement">
          Code de sécurité
          <CardCVCElement />
        </label>

        <button
          style={{ marginTop: "20px", textDecoration: "none" }}
          onClick={this.submit}
          className="send-stripe"
          to="/mon-espace"
        >
          Confirmer le paiement
        </button>
      </div>
    );
  }
}
export default injectStripe(CheckoutForm);
