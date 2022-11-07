import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Card />
      <form action="">
        <label htmlFor="">Ingresa tu nombre</label>
        <input type="text" placeholder="Ingresa tu nombre..."/>
      </form>
    </div>
  )
}

export default App
