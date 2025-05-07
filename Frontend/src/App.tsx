import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>
      <h2 style={{ color: '#646cff' }}>B6500900</h2>
      <h2 style={{ color: '#61dafb' }}>B6525781</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          🎯 Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* MEME GIF SECTION */}
      <div className="meme-section">
        <h3>🔥 Meme of the Day 🔥</h3>
        <img
          src="https://media.tenor.com/3bUc8I2ZxHcAAAAC/coding-programmer.gif"
          alt="Funny coding meme"
          className="meme-gif"
        />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  )
}

export default App
