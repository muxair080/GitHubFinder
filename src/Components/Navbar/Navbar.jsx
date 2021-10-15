import React from 'react'
import {AppBar , Toolbar , Typography} from '@material-ui/core'
const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography varaint = 'h2'>GitHubFinder</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
