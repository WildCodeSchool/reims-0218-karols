import React from "react"
import ChoicePrestation from "./ChoicePrestation"
import PrestationTitle from "./PrestationTitle"

const ListChoicePrestation = ({
  prestations,
  select,
  showCounter,
  handlePlus,
  handleMinus
}) => (
  <div>
    <PrestationTitle />
    {prestations.map(prestation => (
      <ChoicePrestation
        key={prestation.id}
        {...prestation}
        select={select}
        showCounter={showCounter}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
      />
    ))}
  </div>
)

export default ListChoicePrestation
