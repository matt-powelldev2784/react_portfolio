import React from 'react'
import { variantsMapping } from './variantsMapping'
import { getOutputCSS } from '../Utilities/getOutputCss'

export const Typeography = ({ variant, cssProps, cssPropsMob, onClick, children, ...props }) => {
    const ComponentType = variant ? variantsMapping[variant].component : 'p'
    const defaultCss = variant ? variantsMapping[variant].defaultCss : ''
    const defaultCssMob = variant ? variantsMapping[variant].defaultCssMob : ''

    const OUTPUT_CSS = getOutputCSS(cssProps, defaultCss)
    const OUTPUT_CSS_MOB = getOutputCSS(cssPropsMob, defaultCssMob)

    return (
        <ComponentType cssText={OUTPUT_CSS} cssTextMob={OUTPUT_CSS_MOB} onClick={onClick}>
            {children}
        </ComponentType>
    )
}
