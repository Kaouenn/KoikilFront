// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
class UploadFiles extends React.Component {
  state = {
    inputValue: "",
    files: [],
    cp: [],
    isLoading: true
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
  //ici on copie les éléments pour pouvoir modifier
  handleChange = event => {
    const files = event.target.files;

    this.setState({ files: [...this.state.files, ...files] }, () => {});
  };

  renderCP = () => {
    if (this.state.isLoading === true) {
      return <p>En cours de chargement ...</p>;
    } else {
      return (
        <div className="rendu-cp">
          {this.state.cp.map(autoecole => (
            <div
              key={autoecole._id}
              className="auto-ecole-axios"
              onClick={() => {}}
            >
              <p>{autoecole.Adresse}</p>
            </div>
          ))}
        </div>
      );
    }
  };

  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="all-conatain-UploadFiles">
          <h1>Je souscris à Assure ton Permis !</h1>

          <div className="contain-auto-ecole-upload">
            {/* CART RECHERCHE AUTO-ECOLE */}
            <div className="auto-elcole">
              <h2>Je sélectionne l'auto-ecole où je suis inscrit</h2>
              <div>
                {/* RECHERCHE auto-ecole */}
                <div className="input-button">
                  <input
                    placeholder="Entrez le code postal de votre auto-école"
                    value={this.state.inputValue}
                    onChange={event => {
                      this.setState({
                        inputValue: event.target.value
                      });
                    }}
                  />
                  <button
                    className="button-cp"
                    onClick={() => {
                      this.componentDidMount();
                    }}
                  >
                    Rechercher mon auto-ecole
                  </button>

                  {this.renderCP()}
                </div>
              </div>
            </div>
            <div className="upload-docs">
              {/* CART TELECHARGEMENT LIVRET - CNI */}
              <h2>Je télécharge mes documents</h2>
              <div>
                <div className="input-line">
                  <h3>
                    Contrat de formation au pemis B entre l’auto-école et vous
                  </h3>
                  <div className="input-image">
                    <div className="input-design">
                      <label for="file" class="label-file">
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
                <div className="input-line">
                  <h3>
                    Contrat de formation au pemis B entre l’auto-école et vous
                  </h3>
                  <div className="input-image">
                    <div className="input-design">
                      <label for="file" class="label-file">
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
                <div className="input-line">
                  <h3>
                    Contrat de formation au pemis B entre l’auto-école et vous
                  </h3>
                  <div className="input-image">
                    <div className="input-design">
                      <label for="file" class="label-file">
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
              </div>
            </div>
          </div>
          {/* bouton avec la fonction sendFiles */}
          <button className="button-go-contrat" onClick={this.sendFiles}>
            Je valide ces documents et j'accède au contrat
          </button>
        </div>
      </MainLayout>
    );
  };
  componentDidMount = async () => {
    const response = await axios.get(
      "https://koikil.herokuapp.com/CP?cp=" + this.state.inputValue
    );
    this.setState({
      cp: response.data,
      isLoading: false
    });
  };
}

export default UploadFiles;
