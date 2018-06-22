import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#FFF",
          border: "2px solid grey",
          paddingTop: "25px",
          paddingBottom: "25px",
          borderRadius: "50px",
          fontSize: "25px"
        }}
      >
        <div>
          <label htmlFor="firstName">* Prénom :</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">* Nom :</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">* Email :</label>
          <Field name="email" component="input" type="email" />
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
