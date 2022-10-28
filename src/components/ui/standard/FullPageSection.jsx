import React from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const FullPageSection = ({ cssProps, cssPropsMob, children }) => {
    const cssDefaults = {
        position: 'relative',
        'text-align': 'center',
        width: '100vw',
        height: '100vh'
    }

    const cssDefaultsMob = {}

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <StyledContainerDiv cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB}>
            {children}
        </StyledContainerDiv>
    )
}

const StyledContainerDiv = styled.div`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
