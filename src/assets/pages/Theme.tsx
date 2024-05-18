import React from 'react'
import theme from '../theme.svg'


const Theme = ({setTheme}: any, {dark}: any) => {
  return (
    <img src={theme} alt="theme" className="nav-item theme" onClick={() => {setTheme(!dark)}}/>
  )
}

export default Theme
