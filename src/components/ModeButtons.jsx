import "./ModeButtons.css"
export default function ModeButtons({ mode, setMode }) {
    const getModeClass = (buttonMode) => `mode-button ${mode === buttonMode ? 'active' : 'unselected'}`

    return (
      <div className="mode-buttons">
        <button className={getModeClass('pomodoro')} onClick={() => setMode('pomodoro')}>pomodoro</button>
        <button className={getModeClass('short')} onClick={() => setMode('short')}>short break</button>
        <button className={getModeClass('long')} onClick={() => setMode('long')}>long break</button>
      </div>
    )
}