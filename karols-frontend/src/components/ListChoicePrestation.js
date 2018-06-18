import React from "react"
import ChoicePrestation from "./ChoicePrestation"

const ListChoicePrestation = ({ prestations, select }) => (
  <div>
    {prestations.map(prestation => (
      <ChoicePrestation key={prestation.id} {...prestation} select={select} />
    ))}
  </div>
)

export default ListChoicePrestation
