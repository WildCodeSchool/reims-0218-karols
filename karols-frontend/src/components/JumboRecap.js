import React from "react"
import { Jumbotron } from "reactstrap"

const JumboRecap = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-12">Récapitulatif</h1>
        <p className="shop">Votre réservation se fera à .....</p>
        <hr className="my-2" />
        <p className="préparation" />
        <p className="gender" />
        <p className="prestation" />
        <p className="horaire" />
        <p className="lead" />
      </Jumbotron>
    </div>
  )
}

export default JumboRecap
