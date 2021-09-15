import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
});

export default function ImgMediaCard(
    props: {
        image: string,
        name: string,
        description: string,
        height: string,
        estimated_age: string
    }
) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    width="250"
                    image={props.image}
                    title={props.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { props.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Tamanho: {props.height} <br/>
                    Idade estimada: {props.estimated_age}<br/>
                    { props.description }
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className="row">
                    <div className="col-md-3">
                        <a href="/home">
                            <img src="img/match/dislike.svg" height="30px" id="icon" alt="Dislike Icon"/>
                        </a>
                    </div>
                    <div className="col-md-6"></div>
                    <div className="col-md-3">
                        <a href="/home">
                            <img src="img/match/like.svg" height="30px" id="icon" alt="Like Icon"/>
                        </a>
                    </div>
                </div>
            </CardActions>
        </Card>
    );
}
