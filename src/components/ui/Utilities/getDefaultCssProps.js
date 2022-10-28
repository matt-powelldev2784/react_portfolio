export const getDefaultCssProps = (cssProps = {}, defaultCssProps) => {
    const cssKeys = Object.keys(cssProps)
    const defaultCssKeys = Object.entries(defaultCssProps)

    let defaultCssArray = []

    defaultCssKeys.forEach((defaultCssProp, i) => {
        const defaultCssKey = defaultCssProp[0]

        if (!cssKeys.includes(defaultCssKey)) {
            defaultCssArray.push(defaultCssProp)
        }
    })

    const defaultCssOutput = Object.fromEntries(defaultCssArray)

    return defaultCssOutput
}
