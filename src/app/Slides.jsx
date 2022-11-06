import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { TitleForwardRef } from '../components/01_Title/01_Title'
import { AboutForwardRef } from '../components/02_About/02_About'
import { ProjectsForwardRef } from '../components/03_Projects/03_Projects'
import { ContactForwardRef } from '../components/04_Contact/04_Contact'

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
        setPageMarker(prevState => {
            return { ...prevState, about: true }
        })
    }

    const scrollToProjects = () => {
        projectsPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker(prevState => {
            return { ...prevState, projects: true }
        })
    }

    const scrollToContact = () => {
        contactPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker(prevState => {
            return { ...prevState, contact: true }
        })
    }

    const scrollToTitle = () => {
        titlePageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
        setPageMarker(prevState => {
            return { ...prevState, title: true }
        })
    }

    return (
        <StyledMain>
            <TitleForwardRef scrollToComponent={scrollToAbout} ref={titlePageRef} />
            <AboutForwardRef triggerAnimation={pageMarker.about} scrollToComponent={scrollToProjects} ref={aboutPageRef} />
            <ProjectsForwardRef triggerAnimation={pageMarker.projects} scrollToComponent={scrollToContact} ref={projectsPageRef} />
            <ContactForwardRef triggerAnimation={pageMarker.contact} scrollToComponent={scrollToTitle} ref={contactPageRef} />
        </StyledMain>
    )
}

const StyledMain = styled.main`
    position: relative;
    display: block;
`
