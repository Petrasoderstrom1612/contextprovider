import React from 'react'
import {ContextStyling} from "../App"

const Button = () => {
  const value = React.useContext(ContextStyling)
  return (
    <button className={`${value}-theme`}>
        Switch Theme
    </button>
  )
}

export default Button
