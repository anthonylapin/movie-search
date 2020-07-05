import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const Movie = (props) => {
    return (
        <Card className="movie">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Movie"
                    image={props.image}
                    title={props.title}
                    height="400px"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {props.title}
                    </Typography>
                    <Typography gutterBottom color="textSecondary" variant="h6" component="p" align="center">
                        {props.year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h3" align="center" color="primary">
                    <a href={props.link}>Learn more</a>
                </Typography>
            </CardActionArea>
        </Card>
    );
};

export default Movie;