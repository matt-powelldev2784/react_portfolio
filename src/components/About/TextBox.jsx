import React, { useEffect } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { ThemeContext } from '../../../../app/App'
import { Typeography } from '../../Typeogrpahy/Typeography'

export const TextBox = ({ triggerAnimation, pageTheme }) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_HEADER_TEXT, THEME_HEADER_BG, THEME_TEXT, THEME_CARD_SHADOW } = theme?.colors?.[pageTheme]

    console.log('triggerAnimation', triggerAnimation)

    return (
        <StyledTextContainer triggerAnimation={triggerAnimation}>
            <p>ffff</p>
        </StyledTextContainer>
    )
}

const openDivAnimationOnLoad = keyframes`
{
    0% {
        max-height: 0%;
    }
    50% {
        max-height: 50%;
     }
    100% {
        max-height: 100%;
     }
}`

const openDivAnimationOnClick = keyframes`
{
    0% {
        max-height: 0%;
    }
    10% {
        max-height: 0%;
     }
    100% {
        max-height: 100%;
     }
}`

const StyledTextContainer = styled.div`
    margin: 0;
    position: absolute;
    width: 50rem;
    top: 8rem;
    left: 50%;
    transform: translate(-50%, -0%);
    border-radius: 10px;
    box-shadow: ${({ THEME_CARD_SHADOW }) => THEME_CARD_SHADOW};

    background-color: rgba(209, 215, 224, 0.3);

    max-height: 100%;
    overflow: visible;
    -webkit-transition: max-height 0.8s;
    -moz-transition: max-height 0.8s;
    transition: max-height 0.8s;
    animation: ${({ triggerAnimation }) => {
        return triggerAnimation
            ? css`
                  ${openDivAnimationOnClick} 3s linear normal
              `
            : css`
                  ${openDivAnimationOnLoad} 3s linear normal
              `
    }};

    @media (max-device-width: 440px) {
        margin: 0;
        position: absolute;
        top: 3.8rem;
        transform: translate(-50%, 0%);
        width: 90%;
        background-color: rgba(209, 215, 224, 0.3);
    }
`
