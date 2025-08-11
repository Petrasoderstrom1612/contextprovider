import React from 'react'
import {ContextStyling} from "../App"


const Header = () => {
   const value = React.useContext(ContextStyling)
   console.log(value)
  return (
    <header className={`${value.light}-theme`}>
      <p>{value.light.split("")[0].toUpperCase()+value.light.slice(1)} theme</p>
    </header>
  )
}

export default Header
