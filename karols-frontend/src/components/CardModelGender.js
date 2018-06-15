import React from "react"
import styles from "../styles/cardModel.css"
import { Card, CardTitle, CardBody } from "reactstrap"

const CardModelGender = ({
  id,
  index,
  title,
  description,
  image,
  selected,
  select
}) => {
  return (
    <div className={styles.card}>
      <Card
        className="cardModel card"
        onClick={() => {
          select(id)
        }}
        style={{
          cursor: "pointer"
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
                  marginTop: "10px"
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
              {/* <Button
                onClick={() => {
                  select(id)
                }}
                style={{
                  display: "block",
                  margin: "2em auto 1em",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "#fff",
                  lineHeight: "1",
                  position: "relative",
                  fontWeight: "700",
                  marginBottom: "80px",
                  padding: "10px 20px"
                }}
              >
                Sélectionner
              </Button> */}
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardModelGender
