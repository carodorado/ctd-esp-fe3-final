import React from "react";
import { Link } from 'react-router-dom';
import image from '../public/images/doctor.jpg'
import { useEffect, useState, useReducer } from 'react';
import { dentistReducer } from "../Reducers/DentistReducer";
import './Card.css';
import { types } from "../Types/Types";


const Card = ( { dentist } ) => {

  const [state, dispatch] = useReducer(dentistReducer, [])
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log("card")
    dispatch({
      type: types.addFav,
      payload: {
        id: dentist.id,
        name: dentist.name
      }
    })
    localStorage.setItem(dentist.id,dentist.name)
    console.log(state.length)
    
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Link to={`/dentist/${dentist.id}`}>
          <div>
            <img src={image}></img>
            <h4>{ dentist.name }</h4>
            <p>Username: { dentist.username }</p>
            <p>Id: { dentist.id }</p>
          </div>
        </Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
