// import React, { Component } from "react"
// import { connect } from "react-redux"

// import { makeChooseCountPeopleTable } from "../actions/actions"

// import SelectClient from "../components/SelectClient"

// const mapStateToProps = state => ({
//   count: state.count
// })

// const mapDispatchToProps = dispatch => ({
//   onCountChange: count => dispatch(makeChooseCountPeopleTable(count))
// })

// class CountPeopleTable extends Component {
//   render() {
//     return (
//       <div>
//         <SelectClient
//           onCountChange={event => {
//             this.props.onCountChange(event.target.value)
//           }}
//           count={this.props.count}
//         />
//       </div>
//     )
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CountPeopleTable)

import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

import {
  // makeChoosecount,
  makeIncrementTable,
  makeDecrementTable
} from "../actions/actions"
// import GenderTitle from "../components/GenderTitle"
// import CardModelGender from "../components/CardModelGender"
// import SelectClient from "../components/SelectClient"
import CardModelTable from "../components/CardModelTable"
import TableTitle from "../components/TableTitle"
import { showCounter } from "../display"

// Pour la connection avec les compteurs
// ajouter handlePlus et handleMInus dans le mapDispatchToProps
// les passer à CardModel

const mapStateToProps = state => ({
  CountPeopleTable: state.CountPeopleTable,
  showCounter: showCounter(state)
})

const mapDispatchToProps = dispatch => ({
  // select: count => dispatch(makeChoosecount(count)),
  handlePlus: count => dispatch(makeIncrementTable(count)),
  handleMinus: count => dispatch(makeDecrementTable(count))
})

class Table extends Component {
  componentDidMount() {
    scroller.scrollTo("CountPeopleTable", {
      duration: 1500,
      delay: 100,
      smooth: true
    })
  }
  render() {
    return (
      <div>
        <TableTitle />
        <Row className="justify-content-center">
          <Zoom>
            <CardModelTable
              select={this.props.select}
              showCounter={this.props.showCounter}
            />
            {/* <CardModelGender
                  id={gender.count}
                  select={this.props.select}
                  {...gender}
                  showCounter={this.props.showCounter}
                /> */}
          </Zoom>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
