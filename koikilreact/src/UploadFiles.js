// import { Link } from "react-router-dom";
import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";
import axios from "axios";
class UploadFiles extends React.Component {
  state = {
    inputValue: "",
    files: [],
    cp: [],
    isLoading: true,
    UserAutoecole: "",
    autoEcoleName: "",
    pic1: false,
    pic2: false,
    pic3: false
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

    this.setState({ files: [...this.state.files, ...files] });
    console.log(files);
  };

  uploadCheck = () => {
    if (this.state.files.length === 0) {
      return (
        <div className="emoticon-upload">
          <p>
            0 images importées{" "}
            <span role="img" aria-label="0">
              🙁
            </span>
          </p>
        </div>
      );
    } else if (this.state.files.length === 1) {
      return (
        <div className="emoticon-upload">
          <p>
            1 image importée{" "}
            <span role="img" aria-label="1 image">
              🙂
            </span>
          </p>
        </div>
      );
    } else if (this.state.files.length === 2) {
      return (
        <div className="emoticon-upload">
          <p>
            2 images importées{" "}
            <span role="img" aria-label="2 images">
              😊
            </span>
          </p>
        </div>
      );
    } else if (this.state.files.length === 3) {
      return (
        <div className="emoticon-upload">
          <p>
            3 images importées{" "}
            <span role="img" aria-label="3 images">
              😀
            </span>
          </p>
        </div>
      );
    }
  };
  // uploadCheck = () => {
  //   if (this.state.files.length === 0) {
  //     return (
  //       <div className="emoticon-upload">
  //         <p>0 images importées 🙁 </p>
  //       </div>
  //     );
  //   } else if (this.state.files.length === 1) {
  //     return (
  //       <div className="emoticon-upload">
  //         <p>✓</p>
  //       </div>
  //     );
  //   } else if (this.state.files.length === 2) {
  //     this.setState({ pic2: true });
  //     return (
  //       <div className="emoticon-upload">
  //         <p>✓</p>
  //       </div>
  //     );
  //   } else if (this.state.files.length === 3) {
  //     this.setState({ pic3: true });
  //     return (
  //       <div className="emoticon-upload">
  //         <p>✓</p>
  //       </div>
  //     );
  //   }
  // };

  renderCP = () => {
    return (
      <div className="rendu-cp">
        {this.state.cp.map(autoecole => (
          <div key={autoecole._id} className="auto-ecole-axios">
            <p
              onClick={() => {
                this.setState({ UserAutoecole: autoecole._id });
                this.setState({
                  autoEcoleName: autoecole["Raison Sociale"]
                });
                this.sendAutoEcoleToDatabase();
              }}
            >
              {autoecole["Raison Sociale"]} :
              <span className="name-auto-ecole"> {autoecole.Adresse}</span>
            </p>
          </div>
        ))}
      </div>
    );
  };
  sendAutoEcoleToDatabase = async () => {
    // e.preventDefault();
    try {
      await axios.post("https://koikil.herokuapp.com/updateUser", {
        email: this.props.user.email,
        autoecole: this.state.UserAutoecole
      });
      console.log(this.state.UserAutoecole);
    } catch (e) {
      console.log(this.state.UserAutoecole);
      console.log("error type ====>", e.message);
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
                    value={
                      this.state.autoEcoleName.length !== 0
                        ? `Votre auto-école: ${this.state.autoEcoleName}`
                        : this.state.inputValue
                    }
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
                <div className="input-line">
                  <h3>
                    Livret d’apprentissage indiquant les heures de conduite
                    réalisées
                  </h3>
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
                <div className="input-line">
                  <h3>
                    Pièce d’identité du futur assuré préparant l’examen du
                    permis
                  </h3>
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
              </div>
              {this.uploadCheck()}
            </div>
          </div>
          {/* bouton avec la fonction sendFiles */}

          {this.state.files.length !== 0 ? (
            <Link
              style={{ marginBottom: "50px" }}
              className="button-go-contrat"
              onClick={this.sendFiles}
              to="/contract"
            >
              Je valide ces documents et j'accède au contrat
            </Link>
          ) : (
            <div className="null-uploadfiles">
              {" "}
              vous devez télécharger vos documents pour pouvpir passer à l'étape
              suivante
            </div>
          )}
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
