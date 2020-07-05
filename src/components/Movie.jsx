import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = (props) => {
    const poster = props.movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;
    return (
        <Card className="movie">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Movie"
                    image={poster}
                    title={props.movie.Title}
                    height="400px"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        {props.movie.Title}
                    </Typography>
                    <Typography gutterBottom color="textSecondary" variant="h6" component="p" align="center">
                        {props.movie.Year}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActionArea>
                <Typography gutterBottom variant="h6" component="h3" align="center" color="primary">
                    <a href={`https://www.imdb.com/title/${props.movie.imdbID}`}>Learn more</a>
                </Typography>
            </CardActionArea>
        </Card>
    );
};

export default Movie;