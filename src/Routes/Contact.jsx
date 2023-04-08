import React from 'react'
import Form from '../Components/Form'
import './Contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  return (
    <div className="formContainer">
      <h1>Contact</h1>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form/>
      </div>
    </div>
  )
}

export default Contact