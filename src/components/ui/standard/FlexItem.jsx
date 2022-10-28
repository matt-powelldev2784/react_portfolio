import React from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const FlexItem = ({ cssProps, cssPropsMob, children }) => {
    const cssDefaults = {
        display: 'block'
    }

    const cssDefaultsMob = {}

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <StyledFlexItem cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB}>
            {children}
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
