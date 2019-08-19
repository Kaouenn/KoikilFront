import React from "react";
import MainLayout from "./MainLayout";
import { Formik } from "formik";
import axios from "axios";

class LoginPage extends React.Component {
  // Pas besoin de state ici, on utilise Formik !

  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
          <div className="allcontain-singup">
        <h1 className="title-signup">Connectez-vous pour <br/><span> bénéficiez des produits Koikil</span></h1>
        {/* On render le composant Formik avec initialValues */}
        <Formik
          initialValues={{ email: "", password: "" }}
          // validate est optionnelle, cette props permet de valider les champs du formulaire
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          // une fois le formulaire soumis on execute ce code
          onSubmit={async values => {
            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/user/log_in",
              {
                email: values.email,
                password: values.password
              }
            );
            this.props.setUser(response.data);
          }}
        >
          {/* Formik nous passe en parametre differents elements pour afficher le formulaire dans un objet formikBag */}
          {formikBag => {
            return (

              // on utilise formikBag.handleSubmit pour le submit du formulaire
              <form autoComplete="off" onSubmit={formikBag.handleSubmit}>
                <div className="input-div">
                  <input
                    className="input-signup"
                    type="text"
                    // les valeurs sont dans formikBag.values
                    value={formikBag.values.email}
                    // le formikBag.handleChange est similaire au handleInputChange du SignUpPage
                    onChange={formikBag.handleChange}
                    // on passe également formikBag.handleBlur pour que formik puisse savoir quand un champ est déselectionné
                    onBlur={formikBag.handleBlur}
                    name="email"
                    autoComplete="off"
                  />
                  {/* Si le champ a une erreur et qu'il a été modifié (touched) on affiche l'erreur */}
                  {formikBag.touched.email && formikBag.errors.email && (
                    <p>{formikBag.errors.email}</p>
                  )}
                </div>
                <div className="input-div">
                  <input
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

                <button className="button-form" type="submit">Login</button>
              </form>

            );
          }}
        </Formik>
      </div>
      </MainLayout>
    );
  };
}

export default LoginPage;
