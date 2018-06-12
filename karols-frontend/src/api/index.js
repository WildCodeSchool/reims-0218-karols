export const fetchShopsPrestations = () =>
  fetch("http://localhost:8000/shops-prestations").then(res => res.json())

export const fetchGendersServices = () =>
  fetch("http://localhost:3000/Genders-Services").then(res => res.json())
