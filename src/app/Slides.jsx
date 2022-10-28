import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Title } from '../components/Title/Title'
import { Projects } from '../components/Projects/Projects'
import { About } from '../components/About/About'

export const Slides = () => {
    const aboutPageRef = useRef()
    const projectPageRef = useRef()
    const contactPageRef = useRef()
    const [pageMarker, setPageMarker] = useState({
        title: true,
        about: false,
        project: false,
        contact: false
    })

    const scrollToAbout = () => {
        aboutPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
        setPageMarker({ title: false, about: true, project: false, contact: false })
    }

    const scrollToProjects = () => {
        projectPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
        setPageMarker({ title: false, about: false, project: true, contact: false })
    }

    const scrollToContact = () => {
        contactPageRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
        setPageMarker({ title: false, about: false, project: false, contact: true })
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
        setPageMarker({ title: true, about: false, project: false, contact: false })
    }

    const scrolTest = () => {
        window.scrollTo(0, 0)
        setPageMarker({ title: true, about: true, project: true, contact: true })
    }

    return (
        <StyledMain>
            <Title scrollToComponent={scrollToAbout} />
            <About pageTheme={'themeA'} triggerAnimation={pageMarker.about} scrollToComponent={scrolTest} />
            <Projects />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    position: relative;
    display: block;
`
