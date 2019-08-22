import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";

class UploadFiles extends React.Component {
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
    axios.post("https://koikil.herokuapp.com/upload", filesFormdata, config);
  };
  handleChange = event => {
    const files = event.target.files;
    this.setState({ files });
  };

  render = () => {
    return (
      <MainLayout>
        <h1>Je souscris à Assure ton Permis !</h1>
        <div>
          {/* CART RECHERCHE AUTO-ECOLE */}
          <div>
            <h2>Je sélectionne l'auto-ecole où je suis inscrit</h2>
            <div>
              {/* RECHERCHE auto-ecole */}
              <input type="text" placeholder="nom de l'auto-ecole, adresse" />
            </div>
          </div>
          <div>
            {/* CART TELECHARGEMENT LIVRET - CNI */}
            <h2>Je télécharge mes documents</h2>
            <input type="file" multiple onChange={this.handleChange} />
            <input type="file" multiple onChange={this.handleChange} />
            <input type="file" multiple onChange={this.handleChange} />
          </div>
          {/* bouton avec la fonction sendFiles */}
          <button onClick={this.sendFiles}>
            Je valide ces documents et j'accède au contrat
          </button>
        </div>
      </MainLayout>
    );
  };
}

export default UploadFiles;
