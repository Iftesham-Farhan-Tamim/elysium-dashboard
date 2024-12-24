// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ThemeProvider } from './contexts/theme'
import RegForm from './components/RegForm'

function App() {
  const [count, setCount] = useState(0)

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <Navbar />
        <HeroSection />
        <RegForm />
      </ThemeProvider>
    </>
  )
}

export default App
