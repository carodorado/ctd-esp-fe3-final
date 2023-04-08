import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import image from '../public/images/doctor.jpg'
import './Detail.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = ( ) => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState([])
  const { id } = useParams()
 console.log(id)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((dentist) => {
        setDentist(dentist)
      })
  }, [])

  return (
    <>
    <div className="detailContainer">
      <div className="detail">
        <img src={image}></img>
        <div>
          <h2>{ dentist.name }</h2>
          <div className = 'info'>
            <p><span>Email: </span>{ dentist.email }</p>
            <p><span>Phone: </span>{ dentist.phone }</p>
            <p><span>Website: </span>{ dentist.website }</p>
          </div>          
        </div>
      </div>
    </div>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

    </>
  )
}

export default Detail