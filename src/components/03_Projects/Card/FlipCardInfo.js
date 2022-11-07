import backgroundBlocks from '../../../img/background_blocks.svg'
import projectsBackgroundImage from '../../../img/projects_small.jpg'
import otsBackgroundImage from '../../../img/ots_grass.jpg'
import otsLogo from '../../../img/ots_logo.svg'
import weatherBackgroundImage from '../../../img/weather_clouds.jpg'
import weatherLogo from '../../../img/weather_logo.svg'
import filmYearBackGroundImage from '../../../img/scar_bg.jpg'
import filmYearLogo from '../../../img/starwars_logo.svg'

export const flipCardInfo = [
    {
        title: 'PROJECTS',
        description: null,
        blurb: 'Please use the arrows and flip cards to browse my projects...',
        text1: 'Please use the arrows and flip cards to browse my projects...',
        text2: null,
        backgroundImg: projectsBackgroundImage,
        imgFront: null,
        imgBack: backgroundBlocks,
        href: null
    },
    {
        title: 'Old Thorntonians FC',
        description: 'Player Registration App',
        blurb: 'Flip the card to view details..',
        text1: 'Frontend built with React, TypeScript, Redux Toolkit and Styled Components.',
        text2: 'Backend built with NodeJS, Express, Mongo DB, Express Validator, Bcrypt and JWT.',
        backgroundImg: otsBackgroundImage,
        imgFront: null,
        imgBack: otsLogo,
        href: 'https://otsregister.netlify.app/'
    },
    {
        title: 'Guess The Film Year App',
        description: null,
        blurb: 'Flip the card to view details..',
        text1: 'Guess the film year game created using React, Styled Components and Redux. ',
        text2: 'I used this project to gain a better understanding of the basics of React.',
        backgroundImg: filmYearBackGroundImage,
        imgFront: null,
        imgBack: filmYearLogo,
        href: 'https://guessthefilmyear.netlify.app'
    },
    {
        title: 'Weather App',
        description: null,
        blurb: 'Flip the card to view details..',
        text1: 'A weather app made using vanilla JavaScript, HTML and CSS.',
        text2: "I used this project to practice my newly learnt JavaScript skills, it uses async functions, geocoding API's, utilizes DOM manipulation and CSS media queries for a responsive design.",
        backgroundImg: weatherBackgroundImage,
        imgFront: null,
        imgBack: weatherLogo,
        href: 'https://mattpowell2784-javascript-weather-app.netlify.app/'
    }
]
