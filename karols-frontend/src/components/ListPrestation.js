import React from "react"
import PreparationChoice from "./PreparationChoice"

const ListPrestations = ({ prestations, select }) => (
  <div>
    {prestations.map(prestation => (
      <PreparationChoice key={prestation.id} {...prestation} select={select} />
    ))}
  </div>
)

export default ListPrestations
