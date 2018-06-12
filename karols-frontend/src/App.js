import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import PageContainer from "./containers/PageContainer"
import PrestationFemaleContainer from "./containers/PrestationFemaleContainer"
import PrestationMaleContainer from "./containers/PrestationMaleContainer"
import GenderContainer from "./containers/GenderContainer"
import ShopContainer from "./containers/ShopContainer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PageContainer />
        <ShopContainer />
        <GenderContainer />
        <PrestationFemaleContainer />
        <PrestationMaleContainer />
      </div>
    )
  }
}

export default App
