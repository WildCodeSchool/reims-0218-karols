import React, { Component } from "react"
import { connect } from "react-redux"

import ListChoiceGender from "../components/ListChoiceGender"
import { makeChooseSex } from "../actions/actions"

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
          <ListChoiceGender
            key={gender.sex}
            name={gender.sex}
            id={gender.sex}
            select={this.props.select}
          />
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderSelect)
