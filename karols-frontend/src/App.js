import React, { Component } from "react"
import "./App.css"

import Logo from "./components/Logo"
import PageContainer from "./containers/PageContainer"
import TimeSlotsContainer from "./containers/TimeSlotsContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <PageContainer />
        <TimeSlotsContainer />
      </div>
    )
  }
}

export default App
