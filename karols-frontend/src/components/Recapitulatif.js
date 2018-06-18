import React from "react"
import { Jumbotron } from "reactstrap"

const Example = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-12">Récapitulatif</h1>
        <p className="lead">Votre réservation se fera à .....</p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typgraphy and spacing to space content out
          within the larger container.
        </p>
        <p className="lead" />
      </Jumbotron>
    </div>
  )
}

export default Example
