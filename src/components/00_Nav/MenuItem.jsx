import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const MenuItem = ({ href, menuContent }) => {
    const { theme } = React.useContext(ThemeContext)
    const { MENU_TEXT, MOB_MENU_TEXT } = theme?.colors?.navigation

    return (
        <StyledListItem>
            <StyledA href={href}>
                <StyledMenuItem menuText={MENU_TEXT} menuTextMob={MOB_MENU_TEXT}>
                    {menuContent}
                </StyledMenuItem>
            </StyledA>
        </StyledListItem>
    )
}

const StyledListItem = styled.li`
    display: block;
`

const StyledA = styled.a`
    text-align: center;
    text-decoration: none;
    z-index: 1;
`

const StyledMenuItem = styled.div`
    position: relative;
    margin: 0rem 0rem 0rem 0rem;
    padding: 0.6rem 0.7rem 0.3rem 0.7rem;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ menuText }) => menuText};
    border-bottom: solid 2px transparent;
    z-index: 10000;

    &:hover {
        color: ${({ menuText }) => menuText};
        border-bottom: solid 2px ${({ menuText }) => menuText};
    }

    @media only screen and (max-width: 451px) {
        width: 100vw;
        margin: auto;
        padding: 0.3rem;
        color: ${({ menuTextMob }) => menuTextMob};
        border-bottom: solid 1px ${({ menuTextMob }) => menuTextMob};

        &:hover {
            color: ${({ menuTextMob }) => menuTextMob};
            border-bottom: solid 1px ${({ menuTextMob }) => menuTextMob};
        }
    }
`
