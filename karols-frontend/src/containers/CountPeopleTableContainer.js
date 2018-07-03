import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import { scroller } from "react-scroll"
import Zoom from "react-reveal/Zoom"

import { makeIncrementTable, makeDecrementTable } from "../actions/actions"

import CardModelTable from "../components/CardModelTable"
import TableTitle from "../components/TableTitle"
import { showCounter } from "../display"

// Pour la connection avec les compteurs
// ajouter handlePlus et handleMInus dans le mapDispatchToProps
// les passer à CardModel

const mapStateToProps = state => ({
  showCounter: showCounter(state),
  count: state.countPeopleTable.count,
  image: state.countPeopleTable.image
})

const mapDispatchToProps = dispatch => ({
  handlePlus: count => dispatch(makeIncrementTable(count)),
  handleMinus: count => dispatch(makeDecrementTable(count))
})

class Table extends Component {
  componentDidMount() {
    scroller.scrollTo("table", {
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
          <Col md="6">
            <Zoom>
              <CardModelTable
                style={{
                  width: "100px"
                }}
                image={this.props.image}
                count={this.props.count}
                handleMinus={this.props.handleMinus}
                handlePlus={this.props.handlePlus}
                select={true}
                showCounter={this.props.showCounter}
              />
            </Zoom>
          </Col>
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
