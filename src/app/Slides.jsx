import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { TitleForwardRef } from '../components/01_Title/Title'
import { AboutForwardRef } from '../components/02_About/About'
import { ProjectsForwardRef } from '../components/03_Projects/Projects'
import { ContactForwardRef } from '../components/04_Contact/Contact'

export const Slides = () => {
    const titlePageRef = useRef()
    const aboutPageRef = useRef()
    const projectsPageRef = useRef()
    const contactPageRef = useRef()

    const [pageMarker, setPageMarker] = useState({
        title: true,
        about: false,
        projects: false,
        contact: false
    })

    const scrollToAbout = () => {
        aboutPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker({ title: false, about: true, projects: false, contact: false })
    }

    const scrollToProjects = () => {
        projectsPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker({ title: false, about: false, projects: true, contact: false })
    }

    const scrollToContact = () => {
        contactPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker({ title: false, about: false, projects: false, contact: true })
    }

    const scrollToTitle = () => {
        titlePageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker({ title: true, about: false, projects: false, contact: false })
    }

    return (
        <StyledMain>
            <TitleForwardRef scrollToComponent={scrollToAbout} ref={titlePageRef} />
            <AboutForwardRef pageTheme={'themeA'} triggerAnimation={pageMarker.about} scrollToComponent={scrollToProjects} ref={aboutPageRef} />
            <ProjectsForwardRef
                pageTheme={'themeB'}
                triggerAnimation={pageMarker.projects}
                scrollToComponent={scrollToContact}
                ref={projectsPageRef}
            />
            <ContactForwardRef pageTheme={'themeA'} triggerAnimation={pageMarker.contact} scrollToComponent={scrollToTitle} ref={contactPageRef} />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    position: relative;
    display: block;
`
