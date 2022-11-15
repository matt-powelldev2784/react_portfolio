import React, { Fragment } from 'react'
import { navContext } from '../../app/Slides'
import { MenuItem } from './MenuItem'
import { ThemeSelectorMenuItem } from './ThemeSelectorMenuItem'

export const MenuElements = ({ menuClickHandler }) => {
    const { navScrolls } = React.useContext(navContext)
    const { scrollToAbout, scrollToProjects, scrollToContact, scrollToTitle } = navScrolls

    return (
        <Fragment>
            <MenuItem menuContent="HOME" scrollTo={scrollToTitle} menuClickHandler={menuClickHandler} />
            <MenuItem menuContent="ABOUT" scrollTo={scrollToAbout} menuClickHandler={menuClickHandler} />
            <MenuItem menuContent="PROJECTS" scrollTo={scrollToProjects} menuClickHandler={menuClickHandler} />
            <MenuItem menuContent="CONTACT" scrollTo={scrollToContact} menuClickHandler={menuClickHandler} />
            <ThemeSelectorMenuItem menuClickHandler={menuClickHandler} />
        </Fragment>
    )
}
