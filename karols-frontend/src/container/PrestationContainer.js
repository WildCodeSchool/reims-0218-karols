import React, { Component } from "react"
import { connect } from "react-redux"
import ChoicePrestation from "../components/ChoicePrestation"
import { fetchPrestation } from "../api"
import { makePrestationsReceived } from "../actions/actions"

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onPrestationsReceived: response => dispatch(makePrestationsReceived(response))
})

class PrestationWrap extends Component {
  render() {
    return (
      <div>
        <ChoicePrestation
          name={"gugusse"}
          imgSrc={
            "https://www.dickson-constant.com/medias/images/catalogue/api/orc-6028-680.jpg"
          }
        />
      </div>
    )
  }

  componentDidMount() {
    fetchPrestation().then(prestations =>
      this.props.onPrestationsReceived(prestations)
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrestationWrap)
