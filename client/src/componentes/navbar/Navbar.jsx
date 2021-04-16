import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: "#fff"
    }
}))

const Navbar = () => {
    const classes = useStyles()

    return (
        <div className="App">
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="primary">
                        Curiosidades Mundo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
