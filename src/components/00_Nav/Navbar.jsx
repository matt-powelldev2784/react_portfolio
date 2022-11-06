import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { MenuElements } from './MenuElements'
import menuIcon from '../../img/menu_white_36.svg'

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { theme } = React.useContext(ThemeContext)
    const { MENU_BG, MOB_MENU_BG } = theme?.colors?.navigation

    useEffect(() => {
        const deviceWidth = window.innerWidth
        deviceWidth < 440 ? setIsMobile(true) : setIsMobile(false)
    }, [isMobile])

    const menuClickHandler = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <StyledNav>
            <Flexbox THEME_BG={MENU_BG} THEME_MOB_MENU_BG={MOB_MENU_BG}>
                {isMobile && (
                    <MenuImgConatiner>
                        <StyledMenuImg src={menuIcon} onClick={menuClickHandler} />
                    </MenuImgConatiner>
                )}
                {menuOpen && <MenuElements />}
                {!isMobile && <MenuElements />}
            </Flexbox>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    padding: 0.75rem;
    z-index: 10000;

    @media (max-device-width: 440px) {
        position: fixed;
        display: block;
        margin: auto;
        top: unset;
        padding: unset;
        right: unset;
        margin: unset;
        background: #000000;
    }
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0rem auto 0.3rem auto;
    z-index: 10000;

    @media (max-device-width: 440px) {
        flex-direction: column;
        margin: auto;
        width: 100%;
    }
`

const MenuImgConatiner = styled.ul`
    position: relative;
    display: block;
    width: 100vw;
`

const StyledMenuImg = styled.img`
    position: relative;
    display: block;
    margin: auto;
`
