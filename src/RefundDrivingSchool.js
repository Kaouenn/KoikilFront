import React from "react";
import MainLayout from "./MainLayout";
import axios from "axios";

class RefuntDrivingSchool extends React.Component {
  state = {
    inputValue: "",
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
    axios.post("https://koikil.herokuapp.com/refund", filesFormdata, config);
  };
  //ici on copie les éléments pour pouvoir modifier
  handleChange = event => {
    const files = event.target.files;

    this.setState({ files: [...this.state.files, ...files] }, () => {});
  };
  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="all-conatain-refund">
          <h1>
            Je demande le paiement de mes heures de conduite à l’auto-école
          </h1>
          <div className="upload-refund">
            <h2>Je télécharge mes documents</h2>
            <div className="Card-refund">
              <div className="input-refund">
                <h3>Résultat de l’examen délivré par la Préfecture</h3>
                <div className="input-image">
                  <div className="input-design">
                    <label for="file" class="label-refund">
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
              <div className="input-refund">
                <h3>
                  Livret d’apprentissage à jour tel que présenté lors de
                  l’examen
                </h3>
                <div className="input-image">
                  <div className="input-design">
                    <label for="file" class="label-refund">
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
          <button className="button-go-refund" onClick={this.sendFiles}>
            Je valide ces documents et je demande à mon assurance le paiement de
            mes heures de conduite
          </button>
          <div className="pararefund">
            <p>
              Assurez-vous que vos documents soient conformes et lisibles avant
              de valider leur envoi. Cela accélérera le processus de paiement.
            </p>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default RefuntDrivingSchool;
