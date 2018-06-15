import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import CardModel from "../components/CardModel"
import { makeChooseShop } from "../actions/actions"

const mapStateToProps = state => ({
  shops: state.shops
})

const mapDispatchToProps = dispatch => ({
  select: shopId => {
    dispatch(makeChooseShop(shopId))
  }
})

class ShopSelect extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        {this.props.shops.map(shop => (
          <Col md="6" className="text-center mb-3">
            <CardModel
              key={shop.id}
              title={shop.city}
              description={shop.address}
              image={shop.image}
              {...shop}
              select={this.props.select}
            />
          </Col>
        ))}
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSelect)
