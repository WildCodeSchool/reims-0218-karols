import { CHOOSE_SERVICE } from "../actions/actions"

const initialState = [
  {
    id: 1,
    name: "Préparation",
    image:
      "https://images.unsplash.com/photo-1500839941678-aae14dbfae9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=30c52f27bd1788b4ebeeb0b3710b4f31&auto=format&fit=crop&w=1720&q=80",
    description: "Venez vous faire maquiller",
    selected: false
  },
  {
    id: 2,
    name: "Table",
    image:
      "https://images.unsplash.com/photo-1510101988417-6c14e1acaab8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5e14b7647b1494e24bb2f49d9e3861c&auto=format&fit=crop&w=1650&q=80",
    description: "Venez boire un coup",
    selected: false
  },
  {
    id: 3,
    name: "Table + préparation",
    image:
      "https://images.unsplash.com/photo-1512462629038-1ff3395c5e5d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55c6a74501d7cbe8155805b05fd151af&auto=format&fit=crop&w=1650&q=80",
    description: "Venez vous faire maquiller et prendre un petit coup",
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
  return prevState
}

export default services
