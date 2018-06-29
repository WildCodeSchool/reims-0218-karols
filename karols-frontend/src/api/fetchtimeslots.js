export const fetchTimeSlots = () =>
  fetch("http://localhost:8000/timeslots").then(res => res.json())
