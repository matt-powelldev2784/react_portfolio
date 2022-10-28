import React from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const Flexbox = ({ cssProps, cssPropsMob, children }) => {
    const cssDefaults = {
        display: 'flex',
        position: 'relative',
        'text-align': 'center',
        'flex-direction': 'row',
        'flex-wrap': 'wrap',
        'justify-content': 'center',
        'align-items': 'center',
        margin: '0rem auto 0rem auto'
    }

    const cssDefaultsMob = {
        display: 'block',
        position: 'absolute'
    }

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <StyledFlexbox cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB}>
            {children}
        </StyledFlexbox>
    )
}

const StyledFlexbox = styled.div`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
