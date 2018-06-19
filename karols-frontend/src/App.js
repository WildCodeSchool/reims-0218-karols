import React, { Component } from "react"
import "./App.css"

import Logo from "./components/Logo"
import PageContainer from "./containers/PageContainer"
import CalendarContainer from "./containers/CalendarContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <PageContainer />
        <CalendarContainer />
      </div>
    )
  }
}

export default App
