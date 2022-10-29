import React, { Fragment } from 'react'
import { MenuItem } from './MenuItem'
import { ThemeSelectorMenuItem } from './ThemeSelectorMenuItem'

export const MenuElements = () => {
    return (
        <Fragment>
            <MenuItem menuContent="HOME" href="" />
            <MenuItem menuContent="ABOUT" href="" />
            <MenuItem menuContent="PROJECTS" href="" />
            <MenuItem menuContent="CONTACT" href="" />
            <ThemeSelectorMenuItem />
        </Fragment>
    )
}
