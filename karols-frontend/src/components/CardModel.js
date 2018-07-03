import React from "react"
import { Card, CardTitle, CardBody, CardFooter } from "reactstrap"
import Info from "./Info"
import Counter from "./Counter"

const CardModel = ({
  id,
  index,
  title,
  description,
  image,
  selected,
  select,
  info,
  showCounter,
  count,
  handleMinus,
  handlePlus
}) => {
  return (
    <div>
      <Card
        style={{
          cursor: "pointer"
        }}
        onClick={() => {
          select(id)
        }}
      >
        <div
          style={{
            minHeight: "300px",
            position: "relative",
            overflow: "hidden",
            boxShadow:
              "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.2)",
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
          <div
            className="data"
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              WebkitTransform: "translateY(calc(-10px + 1em))",
              transform: "translateY(calc(-10px + 1em))",
              transition: "-webkit-transform 0.3s"
            }}
          >
            <CardBody className="content">
              <CardTitle
                className="title"
                style={{
                  fontWeight: "500",
                  fontSize: "30px",
                  marginBottom: "120px",

                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  width: "auto",
                  minWidth: "auto",
                  maxWidth: "auto",

                  background: selected
                    ? `linear-gradient(
                      rgba(0, 0, 0, 0.5), 
                      rgba(0, 0, 0, 0.5)
                      ),  center/100% no-repeat`
                    : `linear-gradient(
                      rgba(255, 255, 255, 0.1), 
                     rgba(255, 255, 255, 0.1)
                     ),  center/100% no-repeat`
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
                  margin: "0",
                  color: "#fff",
                  WebkitTransform: "translateY(calc(0px + 1em))",
                  transform: "translateY(calc(0px + 1em))"
                }}
              >
                {description}
              </p>
              {showCounter && (
                <Counter
                  count={count}
                  handleMinus={handleMinus}
                  handlePlus={handlePlus}
                />
              )}
              {info && <Info info={info} />}
              {/* 
              si info est true dans le json il renvoie le composant Info auquel on a passé la props info */}
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardModel
