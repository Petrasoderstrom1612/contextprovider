import React from 'react'
import {ContextStyling} from "../App"

const Button = () => {
  const value = React.useContext(ContextStyling)
  console.log(value)
  return (
    <button className={`${value.light}-theme`} onClick={value.toggleTheme}>
        Switch Theme
    </button>
  )
}

export default Button
