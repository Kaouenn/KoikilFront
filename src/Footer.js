import React from "react";
import "./index.css";
// import { Link } from "react-router-dom";

class Footer extends React.Component {
  render = () => {
    return (
      <footer>
        <div className="footerBlockone">
          <div className="flexLeft">
            <h4>Koikil</h4>
            <p>
              Koikil est une Société par Actions Simplifiée (SAS) au capital de
              XXXX€, est enregistrée auprès de l’ORIAS (www.orias.fr) sous le
              numéro XXXXXXXXXXX et domiciliée au XX RUE XXXXX, XXXXX - SIREN
              XXXXXXXXXX
            </p>
            <p>
              Koikil est soumise au contrôle de l’Autorité de Contrôle
              Prudentiel et de Résolution (ACPR), 61 rue Taitbout, Paris 75009
            </p>
          </div>
          <div className="flexMiddle" />

          <div className="flexRight">
            <h4>Reclamation</h4>
            <p>
              Vous pouvez nous écrire en <br />
              ligne via votre espace <br />
              personnel ou saisir le <br />
              Médiateur de l’Assurace à <br />
              l’adresse TSA 50110, 75441
              <br />
              Paris Cedex 09
            </p>

            <h4>Confidentialité</h4>
            <p>Notre politique</p>
          </div>
        </div>

        <div className="footerblocktwo">
          <h4>Mentions légales</h4>
          <div className="rectangle">
            <p>
              Directeur de la publication : Lucas Finchelstein Editeur : Ce site
              est produit par Koikil SAS. Pour toute question concernant son
              utilisation, contactez-nous en ligne@
            </p>
            <p>
              Hébergement : Le site koikil.fr est hébergé par la société
              XXXXXXXXXXXXXXX (NOM LEGAL, ADRESSE, VILLE) sur les serveurs
              XYZXYZ.
            </p>
            <p>
              Les traitements automatisés relatifs à la gestion des informations
              personnelles des clients ou prospects ont fait l’objet d’une
              déclaration (n°000000000) auprès de la Commission Nationale
              Informatique et Liberté (CNIL)
            </p>
            <p>
              Conformément à la loi n°78-17 vous bénéficiez d’un droit d’accès,
              de rectification et d’opposition relatif aux données vous
              concernant pouvant être exercé en adressant un mail à l’adresse
              xxxxxx@wwww.com
            </p>
          </div>
        </div>
      </footer>
    );
  };
}

export default Footer;
