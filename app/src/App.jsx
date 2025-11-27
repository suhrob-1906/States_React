import { useState } from 'react'
import Counter from './components/Counter.jsx'
import ThemeLogger from './components/ThemeLogger.jsx'
import Textinput from './components/Textinput.jsx'
function App() {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState('');
  return (
    <div className={`app ${theme}`}>
      <h1>React State</h1>
      <ThemeLogger theme={theme} setTheme={setTheme}/>
      <Counter/>
      <Textinput username={username} setUsername={setUsername}/>
      <p>Current username:{username}</p>
      </div>
   
  )
}

export default App
// rafce 