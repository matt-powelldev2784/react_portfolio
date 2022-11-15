import React, { useState, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { base, light, dark } from './themes'
import { Slides } from './Slides'

const themesMap = { light, dark }

export const ThemeContext = createContext()

const App = () => {
    const [currentTheme, setCurrentTheme] = useState('dark')
    const theme = { ...base, colors: themesMap[currentTheme] }

    const deviceWidth = window.innerWidth
    const isDesktop = deviceWidth > 451 ? true : false

    return (
        <ThemeContext.Provider value={{ isDesktop, theme, currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Slides />
                </div>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default App
