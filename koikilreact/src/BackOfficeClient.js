import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileContract,
  faSearch,
  faDownload,
  faPenSquare
} from "@fortawesome/free-solid-svg-icons";

class BackOfficeClient extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render = () => {
    return (
      <MainLayout
        user={this.props.user}
        setUser={this.props.setUser}
        createdContract={this.props.createdContract}
      >
        <div className="bigCard-Client">
          <h1>Mon Contrat</h1>
          {this.props.user === null || this.props.user === undefined ? null : (
            <p>
              Contrat N° 2342 souscrit le {this.props.createdContract}
              <br />
              {this.props.user.lastName} {""}
              {this.props.user.name} <br />
              Auto-Ecole Legendre Leclerc
            </p>
          )}
        </div>
        <div className="itemCard-Client">
          <div className="singleCard-Client">
            <FontAwesomeIcon icon={faSearch} className="iconClient" />
            <button>
              <a href={this.props.nimporteKelProps}>voir mon contrat</a>
            </button>
            <h3>Consulter mon contrat</h3>
            <p>
              Ton contrat Assure Ton Permis ! souscrit depuis le site de Koikil
            </p>
          </div>
          <Link className="singleCard-Client" to="/remboursement">
            <FontAwesomeIcon icon={faFileContract} className="iconClient" />

            <h3>
              Demander le paiement de mes heures de conduite à l’auto-école
            </h3>
            <p>
              Tu as raté ton permis ? Envoie-nous ton résultat et ton assurance
              te paye des heures de conduite !
            </p>
          </Link>
          <div className="singleCard-Client">
            <FontAwesomeIcon icon={faDownload} className="iconClient" />
            <h3>Consulter le reçu du paiement </h3>
            <p>
              Il prouve que nous avons payé tes heures de conduite et tes frais
              d’examen à l’auto-école
            </p>
          </div>
          <div className="singleCard-Client">
            <FontAwesomeIcon icon={faPenSquare} className="iconClient" />
            <h3>Contactez-nous</h3>
            <p>
              Nous serons heureux de te répondre quelle que soit ta question ou
              ta remarque
            </p>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default BackOfficeClient;
