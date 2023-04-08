import React from "react";
import { useState } from 'react'
import './Form.css'


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [user, setUser] = useState({
    name: '',
    email: ''
})

const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(user.name.length > 5 && emailRegex.test(user.email) ){
     setShow(true)
     setError(false)
    } else {
      setError(true)
      setShow(false)
    } 
}

  return (
    <div className="form">
      <form onSubmit={handleSubmit} >
        <div>
            <label>Name</label> 
            <input type="text" onChange={(event) => setUser({...user, name: event.target.value})}/>
            <label>Email</label>
            <input type="email" onChange={(event) => setUser({...user, email: event.target.value})}/>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && 'Por favor verifique su información nuevamente'}
      {show && `Gracias ${user.name}, te contactaremos cuanto antes vía mail`}
    </div>
  );
};

export default Form;
