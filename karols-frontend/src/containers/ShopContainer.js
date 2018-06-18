import React, { Component } from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import CardModel from "../components/CardModel"
import ShopTitle from "../components/ShopTitle"
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
      <div>
        <ShopTitle />
        <Row className="justify-content-center">
          {this.props.shops.map(shop => (
            <Col key={shop.id} md="6" className="text-center mb-3">
              <CardModel
                title={shop.city}
                description={shop.address}
                image={shop.image}
                {...shop}
                select={this.props.select}
              />
            </Col>
          ))}
        </Row>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopSelect)
