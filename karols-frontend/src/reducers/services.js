import { CHOOSE_SERVICE, GENDERS_SERVICES_RECEIVED } from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Préparation",
    selected: false
  },
  {
    id: 2,
    name: "Table",
    selected: false
  },
  {
    id: 3,
    name: "Table + préparation",
    selected: false
  }
]

const services = (prevState = initialState, action) => {
  if (action.type === CHOOSE_SERVICE) {
    return prevState.map(service => ({
      ...service,
      selected: action.serviceId === service.id
    }))
  }
  if (action.type === GENDERS_SERVICES_RECEIVED) {
    return action.response.prestations
  }
  return prevState
}

export default services
