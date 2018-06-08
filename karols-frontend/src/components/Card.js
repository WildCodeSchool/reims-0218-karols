import React from "react"
import { Button } from "reactstrap"
import styles from "../styles/card.css"

const Card = () => {
  return (
    <div className={styles.Card}>
      <div className="example-2 card">
        <div className="wrapper">
          <div className="data">
            <div className="content text-center">
              <h1 className="title">
                <a href="#"> Karols </a>
              </h1>
              <p className="text">
                The antsy bingers of Netflix will eagerly anticipate the digital
                release of the Survive soundtrack, out today.
              </p>
              <Button href="#" className="btn justify-content-center">
                {" "}
                Coucou{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
