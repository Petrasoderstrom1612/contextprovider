import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Button from "./components/Button"

const ContextStyling = React.createContext()

function App() {

  return (
    <ContextStyling.Provider value="light">
    <div className="container dark-theme">
      <Header/>
      <Button/>
    </div>
    </ContextStyling.Provider>
  )
}

export {ContextStyling}

export default App
