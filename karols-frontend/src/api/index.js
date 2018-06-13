export const fetchShopsPrestations = () =>
  fetch("http://localhost:8000/shops-prestations").then(res => res.json())
