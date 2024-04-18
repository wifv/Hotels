import React, { useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime';

const App = () => {

  const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66472582c6msh2b7ad70ff469f03p1d2212jsn8e4164df4bc6',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };
  
  const [lx, setLx] = useState('')

  useEffect(() => {
    fetch(url, options)
    .then(res => {
      if (!res.ok) {
        throw new Error("Too Many Requests");
      }
      
      return res.json()
    })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        setLx(lx + data[i].embed + '<br />')
      }
    })
  }, [])

  return (
    <ul>
      {lx}
    </ul>
  )
}

export default App
