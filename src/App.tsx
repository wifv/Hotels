import React, { useEffect, useState } from 'react'
import { JSX } from 'react/jsx-runtime';
import './assets/css/app.css'
import './assets/css/global.css'

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
        let htmlString = '';
        for (let i = 0; i < 8; i++) {
          htmlString += data[i].embed;  
        }
        setLx(htmlString);
      })
  }, [])

  if (lx !== '') {
    return (
      <main className='container'>
        <div dangerouslySetInnerHTML={{ __html: lx }} className='video'/>
      </main>
    )
  }
}

export default App

