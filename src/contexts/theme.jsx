import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    const storedTheme = localStorage.getItem('themeName')
    return storedTheme || 'light'
  })

  useEffect(() => {
    const applyTheme = (name) => {
      document.documentElement.classList.toggle('dark', name === 'dark')
    }

    applyTheme(themeName)

    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e) => {
      const storedTheme = localStorage.getItem('themeName')
      if (!storedTheme) {
        const systemTheme = e.matches ? 'dark' : 'light'
        setThemeName(systemTheme)
        applyTheme(systemTheme)
      }
    }

    darkMediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => darkMediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [themeName])

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark'
    localStorage.setItem('themeName', newTheme)
    setThemeName(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
