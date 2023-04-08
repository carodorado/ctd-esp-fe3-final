import React from 'react'
import { useEffect, useState } from 'react';

import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentists, setDentists] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json()
      })
      .then((dentists) => {
        setDentists(dentists)
      })
  }, [])

  return (
    <main className="main" >
      <h1>Home</h1>
      <div className='card-grid'>
        { dentists.map(element =>
          <Card key={element.id} dentist={element} />)}
      </div>
    </main>
  )
}

export default Home