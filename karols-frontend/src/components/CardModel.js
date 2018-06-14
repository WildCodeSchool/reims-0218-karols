import React from "react"
import styles from "../styles/cardModel.css"
import { Card, CardTitle, CardBody, CardFooter, Button } from "reactstrap"

const CardModel = ({ id, title, description, image, selected, select }) => {
  return (
    <div className={styles.card}>
      <Card
        className="cardModel card"
        style={{}}
        onClick={() => {
          select(id)
        }}
      >
        <div
          className="wrapper text-center"
          style={{
            background: selected
              ? `linear-gradient(
  rgba(255, 255, 255, 0.1), 
 rgba(255, 255, 255, 0.1)
 ), url(${image}) center/100% no-repeat`
              : `linear-gradient(
 rgba(0, 0, 0, 0.5), 
 rgba(0, 0, 0, 0.5)
 ), url(${image}) center/100% no-repeat`
          }}
        >
          <div className="data">
            <CardBody className="content">
              <CardTitle
                className="title"
                style={{
                  fontWeight: "500",
                  fontSize: "30px",
                  marginBottom: "120px"
                }}
              >
                <p
                  style={{
                    color: "#FFF"
                  }}
                >
                  {title}
                </p>
              </CardTitle>
            </CardBody>
            <CardFooter
              style={{
                backgroundColor: "rgba(136,136,136, 0.5)"
              }}
            >
              <p
                className="text"
                style={{
                  height: "70px",
                  margin: "0"
                }}
              >
                {description}
              </p>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardModel
