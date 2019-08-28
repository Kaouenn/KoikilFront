import React from "react";
import MainLayout from "./MainLayout";
import { Link } from "react-router-dom";
import "./index.css";

class AssureTonPermis extends React.Component {
  // Pas besoin de state ici, on utilise Formik !
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="allContain-ATP">
          <div className="ATP-bloc1">
            <div className="ATP-bloc1-part1">
              <h2>
                Comment fonctionne <span>Assure ton Permis</span> ?
              </h2>
              <div className="ATP-bloc1-part1-text">
                <p>
                  Je souscris à l’assurance Assure ton Permis pour{" "}
                  <span>150€</span> puis{" "}
                  <span>je passe l’examen du permis.</span>
                </p>
                <p>
                  Si je rate mon permis, l’assurance paie pour moi{" "}
                  <span>
                    5 heures de conduite et les frais du 2ème examen à mon
                    auto-école. Je peux passer une 2ème fois l’examen !
                  </span>
                </p>
              </div>
            </div>
            <div className="ATP-bloc1-part2">
              <h2>
                Quellles sont <span>les conditions pour souscrire</span> ?
              </h2>
              <div className="ATP-bloc1-part2-text">
                <p>
                  Avoir suivi{" "}
                  <span>
                    moins de 5 heures de conduite au jour de la souscription.
                  </span>
                </p>
                <p>
                  Être inscrit dans une <span>auto-école</span> où{" "}
                  <span>Assure ton Permis est disponible.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="ATP-bloc2">
            <h2>Ça t’intéresse ? Deviens Assuré Koikil !</h2>

            <Link className="souscrire-ATP" to="/sign_up">
              <h3>Souscrire à Assure Ton Permis !</h3>
            </Link>

            <h4>Tu n'en as que pour quelques minutes.</h4>
          </div>
        </div>
      </MainLayout>
    );
  };
}

export default AssureTonPermis;
