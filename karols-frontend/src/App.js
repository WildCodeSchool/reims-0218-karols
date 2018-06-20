import React, { Component } from "react"
import "./App.css"

import Logo from "./components/Logo"
import PageContainer from "./containers/PageContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <PageContainer />
      </div>
    )
  }
}

export default App
