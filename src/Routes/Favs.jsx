import React from "react";
import Card from "../Components/Card";
import { useEffect, useState, useReducer } from 'react';
import { dentistReducer } from "../Reducers/DentistReducer";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const [dentists, setDentists] = useState([])
  const [state, dispatch] = useReducer(dentistReducer, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((dentists) => {
        setDentists(dentists)
      })
      console.log('state length', state.length)
  }, [])

  return (
    <>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">

      { dentists.filter(favDentist => localStorage.getItem(favDentist.id)).map(element => 
          <Card key={element.id} dentist={element} />)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
