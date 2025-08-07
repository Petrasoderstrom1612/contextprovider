import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Button from "./components/Button"

const ContextStyling = React.createContext()

function App() {

  return (
    <ContextStyling.Provider value="dark">
      <Header/>
          <br/>
      <Button/>
    </ContextStyling.Provider>
  )
}

export {ContextStyling}

export default App
