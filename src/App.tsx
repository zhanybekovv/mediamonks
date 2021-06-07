import React, { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Main from './components/Main'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  if (loading) {
    return (
        <Loader />
    )
  }

  return <Main /> 
}

export default App
