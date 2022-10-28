import React from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const Button = ({ cssProps, cssPropsMob, onClick, children }) => {
    const cssDefaults = {
        position: 'relative',
        'text-align': 'center'
    }

    const cssDefaultsMob = {}

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <StyledButton cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
