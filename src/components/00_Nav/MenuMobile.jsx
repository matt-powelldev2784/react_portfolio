import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuElements } from './MenuElements'
import menuIcon from '../../img/menu_white_36.svg'

export const MenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuClickHandler = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <StyledDiv>
            <MenuImgConatiner>
                <StyledMenuImg src={menuIcon} onClick={menuClickHandler} />
            </MenuImgConatiner>
            {menuOpen && <MenuElements menuClickHandler={menuClickHandler} />}
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: none;
    @media only screen and (max-width: 451px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        width: 100%;
        z-index: 10000;
    }
    @media only screen and (max-height: 400px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
        width: 100%;
        z-index: 10000;
    }
`

const MenuImgConatiner = styled.ul`
    display: none;

    @media only screen and (max-width: 451px) {
        position: relative;
        display: block;
        width: 100vw;
    }

    @media only screen and (max-height: 400px) {
        position: relative;
        display: block;
        width: 100vw;
    }
`

const StyledMenuImg = styled.img`
    position: relative;
    display: block;
    margin: auto;
`
