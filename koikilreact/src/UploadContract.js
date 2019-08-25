// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";

class UploadContract extends React.Component {
  state = {
    files: []
  };
  sendFiles = () => {
    // on crée un nouveau FormData
    const filesFormdata = new FormData();

    for (let i = 0; i < this.state.files.length; i++) {
      // on ajoute un fichier au FormData
      filesFormdata.append(`file${i}`, this.state.files[i]);
    }
    // on envoie le FormData avec axios, en précisant dans le header le `content-type` de type `multipart/form-data` (propre à l'envoi de fichiers)
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    console.log(filesFormdata);
    axios.post("https://koikil.herokuapp.com/contract", filesFormdata, config);
  };
  handleChange = event => {
    const files = event.target.files;
    this.setState({ files: [...this.state.files, ...files] }, () => {});
  };
  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="contrat--container">
          {/* CART CONTRAT--LEFT Titre Papiers */}
          <div className="contrat--left">
            <h1>Dernière étape, les papiers !</h1>
            <p>
              Pas besoin d'imprimer, tout sera disponible depuis votre espace
            </p>
          </div>
          {/* CART CONTRAT--RIGHT TELECHARGEMENT CONTRAT */}
          <div className="contrat--right">
            <h2>Le contrat</h2>

            <div>
              <h3>
                L'engagement entre Koikil et vous pour <br />
                <span>Assure ton Permis !</span>
              </h3>

              <div className="input-image">
                <div className="input-design">
                  <label for="file" className="contrat--download">
                    Lire puis signer en ligne le contrat
                  </label>
                </div>
                <input
                  id="file"
                  className="input-file"
                  type="file"
                  name="contrat"
                  onChange={this.handleChange}
                />
                {/* bouton avec la fonction sendFiles */}
                <button className="button-go-contrat" onClick={this.sendFiles}>
                  UPLOAD CONTRAT
                </button>
                {/* bouton avec la fonction sendFiles */}
                <button className="button-go-contrat">
                  PROCEDER AU PAIEMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  };
}
export default UploadContract;
