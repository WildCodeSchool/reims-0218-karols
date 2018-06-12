import React from "react"
import styles from "../styles/cardModel.css"
import { Card, CardTitle, CardBody, Button } from "reactstrap"

const ChoiceGender = ({ gender, image }) => {
  return (
    <div className="mb-4">
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
                  className="city"
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
                    {gender}
                  </p>
                </CardTitle>
                <Button
                  style={{
                    display: "block",
                    margin: "2em auto 1em",
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#fff",
                    lineHeight: "1",
                    position: "relative",
                    fontWeight: "700",
                    marginBottom: "40px",
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
    </div>
  )
}

export default ChoiceGender
