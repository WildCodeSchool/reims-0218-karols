import React from "react"
import styles from "../styles/cardModel.css"
import { Card, CardTitle, CardBody, Button } from "reactstrap"

const CardModelGender = ({
  id,
  title,
  description,
  image,
  selected,
  select
}) => {
  return (
    <div className={styles.card}>
      <Card className="cardModel card" style={{}}>
        <div
          className="wrapper text-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
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
                {selected && <p>SELECTED</p>}
                <p
                  style={{
                    color: "#FFF"
                  }}
                >
                  {title}
                </p>
              </CardTitle>
              <Button
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
              </Button>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardModelGender
