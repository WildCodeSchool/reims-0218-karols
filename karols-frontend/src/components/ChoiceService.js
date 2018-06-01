// import React from "react"
// import {
//   Card,
//   CardText,
//   CardBody,
//   CardTitle,
//   Button,
//   CardFooter
// } from "reactstrap"

// const ChoiceService = ({ name, description, image }) => {
//   return (
//     <div>
//       <Card>
//         <CardBody>
//           <CardTitle
//             style={{
//               "font-size": "2em"
//             }}
//           >
//             {name}
//           </CardTitle>
//         </CardBody>
//         <a href="">
//           <img
//             className="img-fluid"
//             width="250"
//             height="250"
//             src={image}
//             alt="Name of service"
//           />
//         </a>
//         <CardBody>
//           <CardText
//             style={{
//               "font-size": "1.5em"
//             }}
//           >
//             {" "}
//             {description}{" "}
//           </CardText>
//         </CardBody>
//         <CardFooter>
//           <Button> Choisir ce service </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

// export default ChoiceService

import React from "react"
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  CardFooter,
  Button
} from "reactstrap"

const ChoiceService = ({ name, description, image }) => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={image} />
        <CardImgOverlay>
          <CardTitle
            style={{
              fontSize: "2em"
            }}
          >
            {name}
          </CardTitle>
          <CardText
            style={{
              fontSize: "1.5em"
            }}
          >
            {description}
          </CardText>
        </CardImgOverlay>
        <CardFooter>
          <Button> Choisir ce service </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ChoiceService
