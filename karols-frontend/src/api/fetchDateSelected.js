export const fetchDateSelected = date =>
  fetch(`http://localhost:8000/date-selected/${date}`).then(res => res.json())
