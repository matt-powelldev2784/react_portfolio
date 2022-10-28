import { getDefaultCssProps } from './getDefaultCssProps'
import { convertCssObjToString } from './convertCssObjtoString'

export const getOutputCSS = (cssProps, defaultCss) => {
    const defaultCssObj = getDefaultCssProps(cssProps, defaultCss)
    const defaultCssString = convertCssObjToString(defaultCssObj)
    const customCssString = convertCssObjToString(cssProps)

    const outputCSS = defaultCssString.concat('\n', customCssString)

    return outputCSS
}
