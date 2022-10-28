import React, { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { base, light, dark } from './themes'
import { Navbar } from '../components/Menu/Navbar'
import { Slides } from './Slides'

const themesMap = { light, dark }

export const ThemeContext = createContext()

const App = () => {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const theme = { ...base, colors: themesMap[currentTheme] }

    return (
        <ThemeContext.Provider value={{ theme, currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Navbar />
                    <Slides />
                </div>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default App
