import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    content: {
        paddingTop:theme.spacing(3)
    }, 
    title: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: "red"
    }
}))

const Content = () => {
    const classes = useStyles()

    return (
        <div className="App">
            <Container maxWidth="lg" className={classes.conten}>
                <Typography variant="h6" className={classes.title}>
                        Curiosidades Mundo
                </Typography>
            </Container>
        </div>
    )
}

export default Content
