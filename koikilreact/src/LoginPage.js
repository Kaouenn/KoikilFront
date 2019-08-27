import React from "react";
import MainLayout from "./MainLayout";
import { Formik } from "formik";
import axios from "axios";
// import { placeholder } from "@babel/types";
import "./index.css";

class LoginPage extends React.Component {
  // Pas besoin de state ici, on utilise Formik !

  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="allcontain-singup-form">
          <div className="login-form-bloc1">
            <h1 className="title-signup">
              Connectez-vous pour <br />
              <span>bénéficier des produits Koikil</span>
            </h1>
          </div>
          <div className="login-form-bloc2">
            {/* On render le composant Formik avec initialValues */}
            <Formik
              initialValues={{ email: "", password: "" }}
              // validate est optionnelle, cette props permet de valider les champs du formulaire
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = "Vous devez renseigner votre adresse email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Adresse email invalide";
                }
                return errors;
              }}
              // une fois le formulaire soumis on execute ce code
              onSubmit={async values => {
                try {
                  const response = await axios.post(
                    "https://koikil.herokuapp.com/loginUser",
                    {
                      email: values.email,
                      password: values.password
                    }
                  );
                  console.log(response.data);
                  this.props.setUser(response.data);
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              {/* Formik nous passe en parametre differents elements pour afficher le formulaire dans un objet formikBag */}
              {formikBag => {
                return (
                  // on utilise formikBag.handleSubmit pour le submit du formulaire

                  <form
                    className="form-login"
                    autoComplete="off"
                    onSubmit={formikBag.handleSubmit}
                  >
                    <h2 className="title-form-login">Connexion</h2>
                    <div
                      className="input-div-form"
                      style={{ marginBottom: "-30px" }}
                    >
                      <div className="input-email-required">
                        <input
                          className="input-signup"
                          type="text"
                          placeholder="Email"
                          // les valeurs sont dans formikBag.values
                          value={formikBag.values.email}
                          // le formikBag.handleChange est similaire au handleInputChange du SignUpPage
                          onChange={formikBag.handleChange}
                          // on passe également formikBag.handleBlur pour que formik puisse savoir quand un champ est déselectionné
                          onBlur={formikBag.handleBlur}
                          name="email"
                          autoComplete="on"
                        />
                        {/* Si le champ a une erreur et qu'il a été modifié (touched) on affiche l'erreur */}
                        {formikBag.touched.email && formikBag.errors.email && (
                          <p className="required">{formikBag.errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="input-div-form">
                      <input
                        placeholder="Mot de passe"
                        className="input-signup"
                        type="password"
                        value={formikBag.values.password}
                        onChange={formikBag.handleChange}
                        onBlur={formikBag.handleBlur}
                        name="password"
                      />
                      {formikBag.errors.password && (
                        <p>{formikBag.errors.password}</p>
                      )}
                    </div>
                    <div className="input-div-form">
                      <button className="button-form" type="submit">
                        Login
                      </button>
                    </div>

                    <h4
                      className="forgot-password"
                      style={{ marginLeft: "80px" }}
                    >
                      J'ai oublié le mot de passe ?
                    </h4>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default LoginPage;
