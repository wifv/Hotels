import { useEffect, useState } from 'react'
import './assets/css/app.css'
import './assets/css/global.css'
import Searchbar from './assets/pages/Searchbar';
import SearchbarResults from './assets/pages/SearchbarResults';

const App = () => {
  const [results, setResults] = useState([])
  
  const url = 'https://free-football-soccer-videos.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66472582c6msh2b7ad70ff469f03p1d2212jsn8e4164df4bc6',
      'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com'
    }
  };
  
  const [lx, setLx] = useState('')
  const [n, setN] = useState(12)

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
      let a = lx;
      for (let i = n-12; i < n; i++) {
        htmlString += data[i].embed;
      }
      setLx(a + htmlString);
      // console.log(data)
    })
  }, [n]) // fetchInfo will be called whenever 'n' changes

  if (lx !== '') {
    return (
      <main className='container'>
        <Searchbar setResults={setResults}/>
        <SearchbarResults results={results}/>
        <div dangerouslySetInnerHTML={{ __html: lx }} className='video' id="items"/>
        <div className="button" onClick={() => setN(n+12)}>See More</div>
      </main>
    )
  }
}

export default App
