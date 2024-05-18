import React, { useState } from 'react'

const Searchbar = ({setResults}: any) => {
  const [input, setInput] = useState('')

  function fetchData (value: any) {
    fetch('https://free-football-soccer-videos.p.rapidapi.com/', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '66472582c6msh2b7ad70ff469f03p1d2212jsn8e4164df4bc6',
        'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
      }
    })
    .then(response => response.json())
    .then((data: any) => {
      const results = data.filter((item: any) => {
        return value && item && item.title && item.title.toLowerCase().includes(value)
      })
      setResults(results)
      console.log(results)
    })
  }

  function handleChange (value: any) {
    setInput(value)
    fetchData(value)
  }

  console.log(input)
  return (
    <div>
      <input type="text" id='search' value={input} onChange={e => {handleChange(e.target.value)}}/>
    </div>
  )
}

export default Searchbar  
