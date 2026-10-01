import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Jogo from './components/Jogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1></h1>
      <Jogo />
    </div>
  )
}

export default App
