import React from 'react'
import Header from './components/Header'
import Button from "./components/Button"

const ContextStyling = React.createContext()

function App() {
const [light, setLight] = React.useState("light")

const toggleTheme = () => {
  console.log("click")
  setLight(prev => (prev ===  "light" ? "dark" : "light"))
}

  return (
    <ContextStyling.Provider value={{light, toggleTheme}}>
    <div className={`container ${light}-theme`}>
      <Header/>
      <Button/>
    </div>
    </ContextStyling.Provider>
  )
}

export {ContextStyling}

export default App

