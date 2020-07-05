import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Movie";
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    handleSearch = (searchMovie) => {
        const addMovie = (newMovie) => {
            this.setState((state, props) => ({ movies: [...state.movies, newMovie] }));
        }

        const resetMovies = () => {
            this.setState({
                movies: []
            });
        }

        fetch(`https://www.omdbapi.com/?s=${searchMovie}&apikey=4a3b711b`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    const foundMovies = jsonResponse.Search;

                    resetMovies();
                    foundMovies.forEach(foundMovie => {
                        addMovie(foundMovie);
                    });
                }
                else {
                    alert(jsonResponse.Error);
                }
            });
    }

    render() {
        return (
            <div>
                <Header search={this.handleSearch} />

                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    className="content"
                >
                    {this.state.movies.map((movie, index) => (
                        <Movie movie={movie} key={index} />
                    ))}
                </Grid>
                <Footer />

            </div>
        );
    }
}




export default App;