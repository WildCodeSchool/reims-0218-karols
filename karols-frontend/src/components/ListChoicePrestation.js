import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import PrestationTitle from "./PrestationTitle"

const ListChoicePrestation = ({ prestations, select }) => (
  <div>
    <PrestationTitle />
    {prestations.map(prestation => (
      <ChoicePrestation key={prestation.id} {...prestation} select={select} />
    ))}
  </div>
)

export default ListChoicePrestation
