import React from "react";
import MainLayout from "./MainLayout";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faArrowCircleRight,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render = () => {
    // const query = queryString.parse(this.props.location.search);
    // console.log(query);

    return (
      <MainLayout user={this.props.user} setUser={this.props.setUser}>
        <div className="titlehomepage">
          <div className="titlehomepagesub">
            <h1>
              Koikil présente Assure ton Permis !<br />
              <span style={{ color: "white" }}>la seule assurance</span> contre
              l’échec
              <br />
              au permis de conduire
            </h1>
            <div className="buttonHome">
              {/* <button className="buttonHome">
                Découvrir Assure ton Permis !
              </button> */}
              <Link className="buttonHomebis" to="/assure-ton-permis">
                Découvrir Assure ton Permis !
              </Link>
            </div>

            <p style={{ color: "white" }}>
              En cas d’échec au permis, retentez-le pour 0€
            </p>
          </div>
        </div>
        <div className="cardItem">
          <div className="CardSingle" style={{ backgroundColor: "yellow" }}>
            <h3 className="cardTitle">Rapide</h3>
            <p>
              <span style={{ fontWeight: "bold" }}>Cinq minutes </span>
              pour s'assurer ou pour être remboursé.
            </p>
          </div>
          <div className="CardSingle" style={{ backgroundColor: "purple" }}>
            <h3 className="cardTitle">100% en ligne</h3>
            <p>
              Tout est fait{" "}
              <span style={{ fontWeight: "bold" }}>
                facilement depuis chez vous.
              </span>
            </p>
          </div>
          <div className="CardSingle" style={{ backgroundColor: "grey" }}>
            <h3 className="cardTitle">Fiable</h3>
            <p>
              Notre contrat est concis, clair et complet :{" "}
              <span style={{ fontWeight: "bold" }}>
                pas de mauvaise surprise !
              </span>
            </p>
          </div>
        </div>

        <div className="subTitle">
          <h2>Quelles sont les étapes ?</h2>
        </div>

        <div className="CardItem">
          <div className="CardItemBlock">
            <div className="number">
              <p>1</p>
            </div>
            <div className="BigCardSingle">
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="iconArrow"
              />
              <div className="CardSmall">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <p>
                  Je m’inscris dans une auto-école couverte par  Assure Ton
                  Permis !
                </p>
              </div>
            </div>
          </div>
          <div className="CardItemBlock">
            <div className="number">
              <p>2</p>
            </div>
            <div className="BigCardSingle">
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="iconArrow"
              />
              <div className="CardSmall">
                <FontAwesomeIcon icon={faBookOpen} className="icon" />
                <p>
                  JE SOUSCRIS A{" "}
                  <span style={{ fontWeight: "bold" }}>
                    ASSURE TON PERMIS !
                  </span>{" "}
                  DEPUIS LE SITE DE KOIKIL POUR 150€
                </p>
              </div>
            </div>
          </div>
          <div className="CardItemBlock">
            <div className="number">
              <p>3</p>
            </div>
            <div className="BigCardSingle">
              <div className="CardSmallbis">
                <FontAwesomeIcon icon={faBookOpen} className="icon" />
                <div>
                  <p>
                    C’est bon !  JE SUIS{" "}
                    <span style={{ fontWeight: "bold" }}>ASSURE KOIKIL !</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subTitle2">
          <h2>
            Nous bénéficions des garanties <br />
            <span style={{ color: " #02B79A" }}>
              les plus solides pour nos
              <br />
              assurés
            </span>
          </h2>
        </div>
        <div className="Papy">
          <div className="parent">
            <div className="petitenfant">
              <p>LOGO</p>
            </div>
            <div className="arrierepetitenfant">
              <p>
                XXX, fondée en 1934, est un assureur
                <br /> mutualiste de large envergure assurant <br />
                plus de XXX clients.
              </p>
            </div>
          </div>
          <div className="parent">
            <div className="petitenfant">
              <p>LOGO</p>
            </div>
            <div className="arrierepetitenfant">
              <p>
                YYY dispose de XX millions d’euros de <br />
                fonds propres.
              </p>
            </div>
          </div>
        </div>
        <div className="divLink">
          <Link className="decouvrir-ton-permis2" to="/assure-ton-permis">
            Découvrir Assure ton Permis !
          </Link>
        </div>
      </MainLayout>
    );
  };
}
export default Home;
