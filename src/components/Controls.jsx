import './Controls.css'

export default function Controls({ isRunning, onStart, onReset }) {
    return (
      <div className="controls">
        <button onClick={onStart}>{isRunning ? 'pause' : 'start'}</button>
        <button onClick={onReset}>reset</button>
      </div>
    )
}