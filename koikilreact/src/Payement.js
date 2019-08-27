// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class Payement extends React.Component {
  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="all-contain-payement">
          <div className="side-left-payment">
            <h2>Tout est en ordre !</h2>
            <h3>
              Il ne vous reste plus qu’à payer pour souscrire à Assure ton
              Permis !
            </h3>
          </div>
          <div className="side-right-payment">
            <StripeProvider
              apiKey="	
pk_test_sByjxI905a9zsWUQi7wHtuqP00VrK0mt7X"
            >
              <div className="stripe-form">
                <h2>Paiement par carte </h2>
                <Elements>
                  <CheckoutForm />
                </Elements>
              </div>
            </StripeProvider>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default Payement;
