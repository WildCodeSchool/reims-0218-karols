import React from "react"
import { Jumbotron } from "reactstrap"

const JumbotronRecap = ({
  shop,
  preparation,
  gender,
  prestation,
  prestation2,
  horaire
}) => {
  return (
    <div>
      <Jumbotron
        style={{
          textAlign: "center",
          backgroundColor: "#d7dbe2",
          fontSize: "25px",
          borderRadius: "100px"
        }}
      >
        <h1 className="display-12">Récapitulatif</h1>
        <p className="shop">Votre réservation se fera à {shop}</p>
        <hr className="my-2" />
        <p className="préparation">Vous avez choisi {preparation} </p>
        <p className="gender">Pour {gender} </p>
        <p className="prestation">
          Vous voulez {prestation} <br />
          Vous voulez {prestation2}{" "}
        </p>
        <p className="horaire">
          Vous désirez être pris en charge le {horaire}{" "}
        </p>
        <p className="lead" />
      </Jumbotron>
    </div>
  )
}

export default JumbotronRecap
