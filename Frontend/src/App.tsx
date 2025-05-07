import { useEffect, useRef } from 'react'
import './App.css'
import meme from './assets/tom-ching-cheng-hanji.gif' 
import chinese from './assets/Tom_Ching_Cheng.mp3'

function App() {
  const audioRef = useRef(null)

  useEffect(() => {
    // Function to try playing the audio
    const tryPlay = async () => {
      if (audioRef.current) {
        try {
          // Try to play audio
          await audioRef.current.play()
          console.log('Audio playing successfully')
          
          // Set volume to ensure it's audible
          audioRef.current.volume = 1.0
        } catch (err) {
          console.warn('Autoplay blocked:', err)
          
          // If autoplay fails, keep trying with increasing delay
          setTimeout(tryPlay, 1000)
        }
      }
    }

    // Try autoplay on page load with a small initial delay
    const timer = setTimeout(tryPlay, 500)
    
    // Clean up timer on unmount
    return () => clearTimeout(timer)
  }, [])

  // Event handler for when the page gets user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => console.log('Audio playing after user interaction'))
          .catch(err => console.warn('Play failed after interaction:', err))
      }
    }

    // Add event listeners for common user interactions
    document.addEventListener('click', handleUserInteraction)
    document.addEventListener('touchstart', handleUserInteraction)
    document.addEventListener('keydown', handleUserInteraction)

    return () => {
      // Remove event listeners on cleanup
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  return (
    <>
      <div className="container">
        <img
          src={meme}
          style={{ width: '350px', height: 'auto', marginBottom: '-30px' }}
          className="logo"
          alt="Meme"
        />

        {/* Audio element with autoplay and loop attributes */}
        <audio 
          ref={audioRef} 
          src={chinese} 
          loop 
          autoPlay 
          style={{ display: 'none' }} 
        />
      </div>

      <h1>Serverless & Cloud</h1>
      <h1>HW Week 9</h1>
      <h2>B6500900 B6525781</h2>
    </>
  )
}

export default App