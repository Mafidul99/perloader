import React, { useEffect } from 'react'

const ThemeToggle = ({ darkMode, setDarkMode }) => {

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 transition-colors bg-gray-200 rounded-lg dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle