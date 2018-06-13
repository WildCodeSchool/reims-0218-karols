import React from "react"
import CardModel from "./CardModel"

const PreparationChoice = ({ id, name, preparations, select }) => (
  <div
    style={{
      border: "1px solid black",
      margin: "10px"
    }}
  >
    <h5>{name}</h5>
    {preparations.map(preparation => (
      <CardModel
        key={preparation.id}
        {...preparation}
        title={preparation.titlePreparation}
        select={preparationId => {
          select(id, preparationId)
        }}
      />
    ))}
  </div>
)

export default PreparationChoice
