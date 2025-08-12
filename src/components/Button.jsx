import React from 'react'
import {ContextStyling} from "../App"

const Button = () => {
  const value = React.useContext(ContextStyling)
  console.log(value)

  // const { light, toggleTheme } = React.useContext(ThemeContext) you can also do object destructuring for the value so you skip the . going into the object

  return (
    <button className={`${value.light}-theme`} onClick={value.toggleTheme}>
        Switch Theme
    </button>
  )
}

export default Button
