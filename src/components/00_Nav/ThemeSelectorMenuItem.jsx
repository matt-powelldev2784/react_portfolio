import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../App/App'

export const ThemeSelectorMenuItem = () => {
    const { theme, currentTheme, setCurrentTheme } = React.useContext(ThemeContext)
    const { THEME_MENU_TEXT, THEME_MOB_MENU_TEXT } = theme?.colors?.themeA
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    const themeMenuTitle = `${newTheme.toUpperCase()} THEME`

    const changeTheme = e => {
        setCurrentTheme(newTheme)
    }

    return (
        <StyledListItem>
            <StyledMenuItem onClick={changeTheme} menuText={THEME_MENU_TEXT} menuTextMob={THEME_MOB_MENU_TEXT}>
                {themeMenuTitle}
            </StyledMenuItem>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
    display: block;
`

const StyledMenuItem = styled.div`
    position: relative;
    margin: 0rem 0.8rem 0rem 0rem;
    padding: 0.6rem 0.7rem 0.3rem 0.7rem;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: ${({ menuText }) => menuText};
    border-bottom: solid 2px transparent;
    z-index: 10000;

    &:hover {
        color: ${({ menuText }) => menuText};
        border-bottom: solid 2px ${({ menuText }) => menuText};
    }

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: auto;
        padding: 0.3rem;
        color: ${({ menuTextMob }) => menuTextMob};
        border-bottom: solid 1px ${({ menuTextMob }) => menuTextMob};

        &:hover {
            color: ${({ menuText }) => menuText};
            border-bottom: solid 1px ${({ menuTextMob }) => menuTextMob};
        }
    }
`
