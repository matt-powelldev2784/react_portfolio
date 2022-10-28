import { StyledH1, StyledP } from './StyledComponents'

export const variantsMapping = {
    h1: {
        component: StyledH1,
        defaultCss: {
            position: 'relative',
            display: 'block',
            margin: '0 auto 0 auto',
            padding: '0.5rem',
            'text-align': 'center',
            'font-size': '3rem',
            'font-weight': '700'
        },
        defaultCssMob: {
            'font-size': '2rem',
            'font-weight': '700'
        }
    },
    p: {
        component: StyledP,
        defaultCss: {
            display: 'block',
            margin: '1rem',
            'text-align': 'center',
            'font-size': '1.5rem',
            'font-weight': '300'
        },
        defaultCssMob: {
            'font-size': '1.2rem'
        }
    }
}
