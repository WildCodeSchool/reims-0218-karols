export const fetchCreateReservation = data =>
  fetch("http://localhost:8000/reservations", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
