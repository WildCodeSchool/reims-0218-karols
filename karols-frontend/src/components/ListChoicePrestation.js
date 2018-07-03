import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import PrestationTitle from "./PrestationTitle"

const ListChoicePrestation = ({ prestations, select, showCounter }) => (
  <div>
    <PrestationTitle />
    {prestations.map(prestation => (
      <ChoicePrestation
        key={prestation.id}
        {...prestation}
        select={select}
        showCounter={showCounter}
      />
    ))}
  </div>
)

export default ListChoicePrestation
