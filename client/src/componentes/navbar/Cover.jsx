import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
    cover: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
        url ('client/src/img/logo.png')`,
        fontSize: "4rem",
        justifyContent: "center",
        display: "flex",
        position: "relative",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        color:"#fff"
    }
}))

const Cover = () => {
    const classes = useStyles()

    return (
        <div className="">
            <Box className={classes.cover}>
                <Box>Agora</Box>
            </Box>
        </div>
    )
}

export default Cover
