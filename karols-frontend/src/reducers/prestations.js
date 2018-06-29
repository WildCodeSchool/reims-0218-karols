import {
  CHOOSE_PRESTATION,
  SHOPS_PRESTATIONS_RECEIVED,
  INCREMENT_PRESTATION,
  DECREMENT_PRESTATION
} from "../actions/actions"

const initialState = []

const prestations = (prevState = initialState, action) => {
  if (action.type === CHOOSE_PRESTATION) {
    // si action type = choose_prestation alors =>
    return prevState.map(prestation => ({
      // return prevstate, parcours chaque prestation
      ...prestation, // on destructure l'objet
      preparations: prestation.preparations.map(preparation => ({
        // propriété preparations, sous objet à l'intérieur
        ...preparation, // on faits une copie de chaque élément
        // on rajoute la propriété selected
        selected:
          prestation.id === action.prestationId // elle est vraie si prestation.id = action.prestationId
            ? preparation.id === action.preparationId
              ? !preparation.selected
              : false
            : preparation.selected
      }))
    }))
  }

  if (action.type === SHOPS_PRESTATIONS_RECEIVED) {
    return action.response.prestations
  }

  if (action.type === INCREMENT_PRESTATION) {
    //si le type de l'action est = à INCREMENT_PRESTATION
    return prevState.map(prestation => ({
      // ont retourne le prevState que l'ont map sur chaque prestation
      ...prestation,
      // on destructure l'objet
      preparations: prestation.preparations.map(preparation => ({
        //dans la propriété preparations, on parcour chaque preparation
        ...preparation,
        // on destructure l'objet preparation
        count:
        // on rajoute la propriété count
          prestation.id === action.prestationId
          //si prestation.id est égal à action.prestationId
            ? preparation.id === action.preparationId
            // et que preparation.id est égal action.preparationId
              ? preparation.count + 1
              // si c'est true alors on additionne 1 à count
              : preparation.count
              // si c'est false il renvoi la valeur actuel de preparation
            : preparation.count
            // si c'est false il renvoi la valeur actuel de prestation
      }))
    }))
  }

  if (action.type === DECREMENT_PRESTATION) {
    return prevState.map(prestation => ({
      ...prestation,
      preparations: prestation.preparations.map(preparation => ({
        ...preparation,
        count:
          prestation.id === action.prestationId
            ? preparation.id === action.preparationId
              ? preparation.count - 1
              : preparation.count
            : preparation.count
      }))
    }))
  }

  return prevState
}

export default prestations
