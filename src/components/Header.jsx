import React from 'react'
import {ContextStyling} from "../App"


const Header = () => {
   const value = React.useContext(ContextStyling)
   console.log(value)
  return (
    <div>
      <p>{value} theme</p>
    </div>
  )
}

export default Header
