import React from "react"
import ChoicePrestation from "./ChoicePrestation"

const ListPrestations = ({ prestations, select }) => (
  <div>
    {prestations.map(prestation => {
      return (
        <ChoicePrestation key={prestation.id} {...prestation} select={select} />
      )
    })}
  </div>
)

export default ListPrestations
