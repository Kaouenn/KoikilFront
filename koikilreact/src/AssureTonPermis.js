import React from "react";
import MainLayout from "./MainLayout";
import "./index.css";

class AssureTonPermis extends React.Component {
  // Pas besoin de state ici, on utilise Formik !

  render = () => {
    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="allContain-ATP">
          <div className="ATP-bloc1">
            <div className="ATP-bloc1-part1">
              <h2>
                Comment fonctinne <span>Assure ton Permis</span>?
              </h2>
              <div className="ATP-bloc1-part1-text">
                <p>
                  Je souscris à l’assurance Assure ton Permis pour{" "}
                  <span>150€</span> puis
                  <span>je passe l’examen du permis.</span>
                </p>
                <p>
                  Si je rate mon permis, l’assurance paie pour moi{" "}
                  <span>
                    5 heures de conduite et les frais du 2è examen à mon
                    auto-école.  Je peux passer une 2e fois l’examen !
                  </span>
                </p>
              </div>
            </div>
            <div className="ATP-bloc1-part2">
              <h2>
                Quellles sont <span>les conditions pour souscrire</span>?
              </h2>
              <div className="ATP-bloc1-part2-text">
                <p>
                  Avoir suivi{" "}
                  <span>
                    moins de 5 heures de conduite au jour de la souscription.
                  </span>
                </p>
                <p>
                  Être inscrit dans une
                  <span>auto-école</span> où{" "}
                  <span>Assure ton Permis est disponible.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="ATP-bloc2">bloc2</div>
        </div>
      </MainLayout>
    );
  };
}

export default AssureTonPermis;
