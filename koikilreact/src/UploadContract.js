// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
import { Link } from "react-router-dom";

class UploadContract extends React.Component {
  state = {
    files: []
  };


  componentDidMount() {
    window.scrollTo(0, 0);
  }

  sendFiles = async () => {

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
    try {
      const response = await axios.post(
        "https://koikil.herokuapp.com/contract",
        filesFormdata,
        config
      );
      this.props.test(response.data.file0.result.secure_url);
      // this.setState({ contractUrl: response.data.file0.result.secure_url });
    } catch (error) {
      console.log(error.message);
    }
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

              <button className="contrat--download" onClick={this.sendFiles}>
                Envoyer le contrat signé
              </button>
              <div className="trait" />
              <button className="contrat--download">
                <a href={this.props.contractUrl}>Voir le contrat</a>
              </button>

              <div className="trait" />

              {/* LINK PAGE DE PAIEMENT */}
              <button className="button-go-contrat">
                <Link to="/paiement">Procéder au paiement</Link>
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  };
}
export default UploadContract;
