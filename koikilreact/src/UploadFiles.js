// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";
class UploadFiles extends React.Component {
  state = {
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
  handleChange = event => {
    const files = event.target.files;

    this.setState({ files: [...this.state.files, ...files] }, () => {});
  };

  renderCP = () => {
    if (this.state.isLoading === true) {
      return <p>En cours de chargement ...</p>;
    } else {
      return (
        <ul>
          {this.state.cp.map(room => (
            <li key={room._id}>{room.title}</li>
          ))}
        </ul>
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
                <div> {this.renderCP()}</div>
                {/* RECHERCHE auto-ecole */}
                <input placeholder="Nom de l’Auto-Ecole, adresse …" />
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
    const response = await axios.get("https://koikil.herokuapp.com/CP");
    this.setState({
      rooms: response.data,
      isLoading: false
    });
  };
}

export default UploadFiles;
