import { useState, useEffect } from 'react'
import ModeButtons from './ModeButtons'
import Controls from './Controls'
import './Timer.css'

export default function Timer() {
    const durations = {
        pomodoro: 25 * 60,
        short: 5 * 60,
        long: 15 * 60
    }

    const bubbleMessages = [                                 // Add this array
        "Keep going~ 🍅",
        "Focus time~",
        "You're doing great!",
        "Stay concentrated!",
        "Almost there!",
        "Don't give up!"
    ]

    const [mode, setMode] = useState('pomodoro')
    const [timeLeft, setTimeLeft] = useState(durations['pomodoro'])
    const [isRunning, setIsRunning] = useState(false)
    const [showYawnGif, setShowYawnGif] = useState(false)
    const [showBubble, setShowBubble] = useState(false)
    const [bubbleText, setBubbleText] = useState('')

    useEffect(() => {
        let interval = null

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1)
            }, 1000)
        } else if (timeLeft === 0) {
            clearInterval(interval)
            setIsRunning(false)
            new Audio('/alert.wav').play()
            if (mode === 'short' || mode === 'long') {
                setShowYawnGif(true)
            }
        }

        return () => clearInterval(interval)
    }, [isRunning, timeLeft, mode])

    useEffect(() => {
        setTimeLeft(durations[mode])
        setIsRunning(false)
        setShowYawnGif(false)
    }, [mode])

    useEffect(() => {
        let bubbleInterval = null
        
        if (isRunning && mode === 'pomodoro') {
            bubbleInterval = setInterval(() => {
                const randomMessage = bubbleMessages[Math.floor(Math.random() * bubbleMessages.length)]
                setBubbleText(randomMessage)
                setShowBubble(true)
                
                setTimeout(() => {
                    setShowBubble(false)
                }, 3000)
            }, 120000)
        }
        
        return () => {
            if (bubbleInterval) clearInterval(bubbleInterval)
        }
    }, [isRunning, mode])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    return (
      <div>
        <div className="main-timer-layout">
            <div className="tomato-container">
                <img src="./clock.PNG" alt="clock face" className="tomato-image" />
                <h1 className="timer-text">{formatTime(timeLeft)}</h1>
            </div>

            <div className="tomato-with-bubble">
                <div className="tomato-image-container">
                    <img src={showYawnGif ? './yawn.GIF' : './tomato.PNG'} 
                        alt={showYawnGif ? 'yawning tomato' : 'regular tomato'}
                        className={`side-tomato ${showYawnGif ? 'yawn' : ''}`} />
                </div>
                <div className={`speech-bubble ${showBubble ? 'show' : ''}`}>
                    {bubbleText}
                </div>
            </div>
        </div>    

        <div className="button-row">
            <ModeButtons mode={mode} setMode={setMode}/>
            <Controls 
                isRunning={isRunning}
                onStart={() => setIsRunning(!isRunning)}
                onReset={() => {
                  setIsRunning(false)
                  setTimeLeft(durations[mode])
                  setShowYawnGif(false)
                  setShowBubble(false)
                }}
            />
        </div>
            
      </div>
    )
}
  