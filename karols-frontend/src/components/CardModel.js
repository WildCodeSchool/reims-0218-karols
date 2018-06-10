import React from "react"
import styles from "../styles/cardModel.css"
import { Card, CardTitle, Col, CardBody, CardFooter, Button } from "reactstrap"

const CardModel = ({ title, description, image }) => {
  return (
    <Col xs="12" md="4" lg="3">
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
                  <h3
                    style={{
                      color: "#FFF"
                    }}
                  >
                    {title}
                  </h3>
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
    </Col>
  )
}

export default CardModel
