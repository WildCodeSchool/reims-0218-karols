export const fetchTimeReservation = data =>
  fetch("https://localhost:8000/reservations", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
