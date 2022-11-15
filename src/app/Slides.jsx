import React, { useRef, createContext } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/00_Nav/00_Navbar'
import { TitleForwardRef } from '../components/01_Title/01_Title'
import { AboutForwardRef } from '../components/02_About/02_About'
import { ProjectsForwardRef } from '../components/03_Projects/03_Projects'
import { ContactForwardRef } from '../components/04_Contact/04_Contact'

export const navContext = createContext()

export const Slides = () => {
    const titlePageRef = useRef()
    const aboutPageRef = useRef()
    const projectsPageRef = useRef()
    const contactPageRef = useRef()

    const scrollToAbout = () => {
        aboutPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
    }

    const scrollToProjects = () => {
        projectsPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
    }

    const scrollToContact = () => {
        contactPageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
    }

    const scrollToTitle = () => {
        titlePageRef.current.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'nearest' })
    }

    const navScrolls = { scrollToAbout, scrollToProjects, scrollToContact, scrollToTitle }

    return (
        <navContext.Provider value={{ navScrolls }}>
            <Navbar />
            <StyledMain>
                <TitleForwardRef scrollToComponent={scrollToAbout} ref={titlePageRef} />
                <AboutForwardRef scrollToComponent={scrollToProjects} ref={aboutPageRef} />
                <ProjectsForwardRef scrollToComponent={scrollToContact} ref={projectsPageRef} />
                <ContactForwardRef scrollToComponent={scrollToTitle} ref={contactPageRef} />
            </StyledMain>
        </navContext.Provider>
    )
}

const StyledMain = styled.main`
    position: relative;
    display: block;
`
