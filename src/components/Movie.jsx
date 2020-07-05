import React from "react";

const DEFAULT_IMAGE = "https://static.thenounproject.com/png/2999524-200.png";

const Movie = (props) => {
    // const poster = (props.poster === null ? DEFAULT_IMAGE : props.poster);
    return (
        <div className="movie">
            <h3 className="movie-title">Movie title</h3>
            <img width="300" alt="" src={DEFAULT_IMAGE}></img>
            <p>2013</p>
        </div>
    );
};

export default Movie;