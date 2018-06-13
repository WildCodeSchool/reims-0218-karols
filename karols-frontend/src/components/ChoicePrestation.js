import React from "react"
import CardModel from "./CardModel"

const PreparationChoice = ({ id, name, preparations, select, image }) => (
  <div>
    <h5>{name}</h5>
    {preparations.map(preparation => (
      <CardModel
        key={preparation.id}
        {...preparation}
        title={preparation.titlePreparation}
        image={preparation.image}
        select={preparationId => {
          select(id, preparationId)
        }}
      />
    ))}
  </div>
)

export default PreparationChoice
