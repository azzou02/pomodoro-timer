# 🍅 Pomodoro Timer

A fun and interactive Pomodoro Timer built with React to help you stay focused and productive!

## ✨ Features

- **Three Timer Modes**:
  - 🍅 Pomodoro (25 minutes) - Focus time
  - ☕ Short Break (5 minutes) - Quick rest
  - 🛋️ Long Break (15 minutes) - Extended rest

- **Interactive Elements**:
  - Start/Pause functionality
  - Reset timer
  - Audio alerts when timer ends
  - Animated yawning tomato during break completion
  - Motivational speech bubbles during focus sessions

- **Visual Design**:
  - Clean, tomato-themed interface
  - Responsive design for all screen sizes
  - Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/azzou02/pomodoro-timer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pomodoro-timer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🎮 How to Use

1. **Choose your mode**: Select between Pomodoro, Short Break, or Long Break
2. **Start the timer**: Click the "Start" button to begin your session
3. **Stay focused**: Watch for motivational speech bubbles during Pomodoro sessions
4. **Take breaks**: When break timers end, enjoy the yawning tomato animation
5. **Reset anytime**: Use the reset button to restart your current session

## 🛠️ Built With

- **React** - Frontend framework
- **CSS3** - Styling and animations
- **Vite** - Build tool and development server

## 📁 Project Structure

```
pomodoro-timer/
├── src/
│   ├── components/
│   │   ├── Timer.jsx
│   │   ├── Timer.css
│   │   ├── Controls.jsx
│   │   ├── Controls.css
│   │   ├── ModeButtons.jsx
│   │   └── ModeButtons.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   ├── clock.PNG
│   ├── tomato.PNG
│   ├── yawn.GIF
│   └── alert.wav
└── README.md
```

## 🎨 Features in Detail

### Timer Functionality
- Accurate countdown timer with minute:second format
- Automatic mode switching between work and break sessions
- Audio notification when sessions complete

### Visual Feedback
- **Speech Bubbles**: Encouraging messages appear every 2 minutes during focus sessions
- **Animated GIF**: Yawning tomato appears when break timers end
- **Responsive Images**: Clean tomato and clock imagery that scales with screen size

### User Experience
- **Pause/Resume**: Toggle timer with a single button
- **Mode Selection**: Easy switching between Pomodoro and break modes
- **Reset Function**: Quickly restart any session
- **Mobile Friendly**: Responsive design works on all devices

## 📝 Future Enhancements

- [ ] Session statistics and tracking
- [ ] Customizable timer durations
- [ ] Desktop notifications
- [ ] Task list integration
- [ ] Sound customization options

---

**Made with ❤️ and lots of ☕**

*Happy focusing! 🍅*