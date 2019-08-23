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
        <div className="all-conatain-UploadFiles">
          <h1>Je souscris à Assure ton Permis !</h1>

          <div className="contain-auto-ecole-upload">
            {/* CART RECHERCHE AUTO-ECOLE */}
            <div className="auto-elcole">
              <h1>Dernière étape, les papiers !</h1>
              <div>
                <h2>
                  Pas besoin d'imprimer, tout sera disponible depuis votre
                  espace
                </h2>
              </div>
            </div>
            <div className="upload-docs">
              {/* CART TELECHARGEMENT CONTRAT */}
              <h2>Le contrat</h2>
              <div>
                <div>
                  <h3>
                    L'engagement entre Koikil et vous pour{" "}
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
                    <button
                      className="button-go-contrat"
                      onClick={this.sendFiles}
                    >
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
          </div>
        </div>
      </MainLayout>
    );
  };
}
export default UploadContract;
