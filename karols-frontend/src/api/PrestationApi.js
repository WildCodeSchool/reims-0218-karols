import React, { Component } from "react"

class PrestationApi extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/prestations")
      .then(res => res.json())
      .then(prestations => console.log(prestations))
  }

  render() {
    return <div> Coucou </div>
  }
}

export default PrestationApi
