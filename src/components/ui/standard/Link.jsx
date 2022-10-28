import React, { Fragment } from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const Link = ({ href, cssProps, cssPropsMob, children }) => {
    const cssDefaults = {
        'text-align': 'center',
        'text-decoration': 'none',
        'z-index': '1'
    }

    const cssDefaultsMob = {}

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <Fragment>
            <StyledLink href={href} cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB}>
                {children}
            </StyledLink>
        </Fragment>
    )
}

const StyledLink = styled.a`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
