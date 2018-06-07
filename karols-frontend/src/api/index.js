export const fetchPrestation = () =>
  fetch("http://localhost:8000/prestations").then(res => res.json())
