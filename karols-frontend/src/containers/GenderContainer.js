import React, { Component } from "react"
import { connect } from "react-redux"

import { makeChooseSex } from "../actions/actions"
import CardModel from "../components/CardModel"

const mapStateToProps = state => ({
  genders: state.genders
})

const mapDispatchToProps = dispatch => ({
  select: sex => dispatch(makeChooseSex(sex))
})

class GenderSelect extends Component {
  render() {
    return (
      <div>
        {this.props.genders.map(gender => (
          <CardModel
            key={gender.sex}
            id={gender.sex}
            select={this.props.select}
            image={gender.image}
          />
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelect)
