import React from "react"
import { Card, CardTitle, Button, CardImg, CardBody } from "reactstrap"

const ListChoiceGender = ({ gender }) => {
  return (
    <div className="mt-4 mb-4">
      <div>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardTitle style={{ fontSize: "2.5em" }}>
            Choisissez votre sexe
          </CardTitle>
          <div className="d-flex">
            <Card className=" m-3">
              <CardImg
                width="300"
                height="300"
                top
                src="https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?ixlib=rb-0.3.5ixid=eyJhcHBfaWQiOjEyMDd9s=361907f0deaaf183ac4ce6b62551dfb3auto=formatfit=cropw=1350q=80"
                alt="Card image cap"
              />
              <CardBody>
                <Button>{gender}</Button>
              </CardBody>
            </Card>
            <Card className="m-3">
              <CardImg
                top
                width="300"
                height="300"
                src="https://images.unsplash.com/photo-1512236393941-3d6da97e56bc?ixlib=rb-0.3.5ixid=eyJhcHBfaWQiOjEyMDd9s=4deda26387ec695d02899757ecbad822auto=formatfit=cropw=1351q=80"
                alt="Card image cap"
              />
              <CardBody className="text-center">
                <Button>{gender}</Button>
              </CardBody>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ListChoiceGender
