import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import meme from './assets/tom-ching-cheng-hanji.gif'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      <img src={meme} style={{ width: '400px', height: 'auto', marginBottom: '-30px' }} className="logo" alt="Vite logo" />
      </div>
      <h1>Serverless & Clound</h1>
      <h1>HW Week 9</h1>
      <h2>B6500900 B6525781</h2>
      
    </>
  )
}

export default App
