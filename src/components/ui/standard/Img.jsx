import React, { Fragment } from 'react'
import styled from 'styled-components'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const Img = ({ src, cssProps, cssPropsMob }) => {
    const cssDefaults = {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '100%'
    }

    const cssDefaultsMob = {}

    const OUTPUT_CSS = getOutputCSS(cssProps, cssDefaults)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, cssDefaultsMob)

    return (
        <Fragment>
            <StyledImage src={src} cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB} />
        </Fragment>
    )
}

const StyledImage = styled.img`
    ${({ cssText }) => {
        return cssText
    }}

    @media (max-device-width: 440px) {
        ${({ cssTextMob }) => {
            return cssTextMob
        }}
    }
`
