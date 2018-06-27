import React, { Component } from "react"
import { connect } from "react-redux"

import { makeChooseCountPeopleTable } from "../actions/actions"

import SelectClient from "../components/SelectClient"

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  select: count => dispatch(makeChooseCountPeopleTable(count))
})

class CountPeopleTable extends Component {
  render() {
    return (
      <div>
        <SelectClient />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountPeopleTable)
