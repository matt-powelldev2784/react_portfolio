export const convertCssObjToString = cssProps => {
    if (!cssProps) {
        return ''
    }

    const cssPropsArray = Object.entries(cssProps)

    const cssTextArray = cssPropsArray.map(cssProp => {
        const cssKey = cssProp[0]
        const cssValue = cssProp[1]
        const cssTextString = `${cssKey}:${cssValue};`
        return cssTextString
    })

    const cssString = cssTextArray.join('\r\n')
    return cssString
}
