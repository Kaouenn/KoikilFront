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
            <h3>
              L'engagement entre Koikil et vous pour <br />
              <span>Assure ton Permis !</span>
            </h3>
            <div className="center">
              <button className="contrat--download">
                <a href="/MonRécapGIT.pdf" download>
                  Lire / télécharger le contrat
                </a>
              </button>

              <div className="input-line">
                <h3>Upload du contrat</h3>
                <div className="input-image">
                  <div className="input-design">
                    <label htmlFor="file" className="label-file">
                      +
                    </label>
                  </div>
                  <input
                    id="file"
                    className="input-file"
                    type="file"
                    multiple
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="trait" />
              {/* LINK PAGE DE PAIEMENT */}
              <button className="button-go-contrat" onClick={this.sendFiles}>
                Procéder au paiement
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  };
}
export default UploadContract;
