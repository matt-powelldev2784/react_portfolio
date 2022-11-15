import React from 'react'
import styled from 'styled-components'
import { MenuMobile } from './MenuMobile'
import { MenuDesktop } from './MenuDesktop'

export const Navbar = () => {
    return (
        <StyledNav>
            <MenuMobile />
            <MenuDesktop />
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

    @media only screen and (max-width: 451px) {
        position: fixed;
        display: block;
        margin: auto;
        top: unset;
        padding: unset;
        right: unset;
        margin: unset;
        background: #000000;
    }

    @media only screen and (max-height: 400px) {
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
