import { useState } from 'react'
import Timer from './components/Timer.jsx'
import './App.css'

function App() {

  return (
    <>
      <h2>Pomodoro <br/> Timer</h2>
      <div className="card">
        <Timer />
      </div>
    </>
  )
}

export default App
