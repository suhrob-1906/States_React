import React from 'react'

export default function ThemeLogger({ theme, setTheme }) {
  return(
    <div>
      <h2>Theme: {theme}</h2>
      <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark': 'light')
      }}
      ></button>
    </div>
  )
}

