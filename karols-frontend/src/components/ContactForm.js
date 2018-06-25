import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "10px auto",
          padding: "16px",
          background: "#F7F7F7",
          fontSize: "22px",
          borderRadius: "10px",
          textAlign: "center"
        }}
        className="justify-content-center"
      >
        <h2
          style={{
            background: "#4D4D4D",
            textTransform: "uppercase",
            color: "#797979",
            fontSize: "18px",
            fontWeight: "100",
            padding: "20px",
            borderRadius: "10px",
            margin: "30px"
          }}
        >
          {" "}
          Formulaire de réservation{" "}
        </h2>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="firstName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Prénom
          </label>
          <Field
            name="firstName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="lastName"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Nom
          </label>
          <Field
            name="lastName"
            component="input"
            type="text"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px"
          }}
        >
          <label
            htmlFor="email"
            style={{
              display: "inline-block",
              width: "140px",
              textAlign: "center"
            }}
          >
            Email
          </label>
          <Field
            name="email"
            component="input"
            type="email"
            style={{
              backgroundColor: "#797979",
              color: "#FFF",
              marginLeft: "20px"
            }}
          />
        </div>
      </form>
    )
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: "contact" // a unique name for this form
})(ContactForm)

export default ContactForm
