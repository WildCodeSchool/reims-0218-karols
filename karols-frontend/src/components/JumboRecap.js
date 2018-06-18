import React from "react"
import { Jumbotron } from "reactstrap"

const JumboRecap = props => {
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
        <p className="shop">Votre réservation se fera à .....</p>
        <hr className="my-2" />
        <p className="préparation">Vous avez choisi ..... </p>
        <p className="gender">Pour ..... </p>
        <p className="prestation">
          Vous voulez ..... <br />
          Vous voulez .....{" "}
        </p>
        <p className="horaire">Vous désirez être pris en charge le ..... </p>
        <p className="lead" />
      </Jumbotron>
    </div>
  )
}

export default JumboRecap
