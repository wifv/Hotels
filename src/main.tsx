import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/pages/Navbar.tsx'
import About from './assets/pages/About.tsx'
import Footer from './assets/pages/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
