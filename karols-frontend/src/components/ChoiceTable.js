import React from "react"
import { Card, CardTitle, CardBody, Button, CardFooter } from "reactstrap"
import Counter from "./Counter"

const ChoiceTable = ({
  image,
  showCounter,
  count,
  handleMinus,
  handlePlus
}) => {
  return (
    <div className="mb-4">
      <Card>
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
                  {count}
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
            <CardFooter>
              {showCounter && (
                <Counter
                  count={count}
                  handleMinus={handleMinus}
                  handlePlus={handlePlus}
                />
              )}
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ChoiceTable
