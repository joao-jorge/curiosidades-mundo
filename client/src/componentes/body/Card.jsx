import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'


const useStyles = makeStyles((theme) => ({
  title: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
  }, 
  card: {
    maxWidth: "100"
  }, 
  media: {
    height: 240
  }
}))

export const Card = () => {
  const classes = useStyles()
  
  return (
    <div>
      <Container>
        <Typography variant="h4" className={classes.title}>
          Artigo
        </Typography>
        <Grid container spacing={3}>
          <Grid item x5={12} sn={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image="" title="Contepmo"/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lia afjoaojsd afjoajsdf  faosjdfo dfa jodaf od
                    afjdkof jao d fao djfof aods jff ajodsfjf jaosd
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}


export default Card