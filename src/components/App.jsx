import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Movie";
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    className="content"
                >
                    <Movie title="Avengers" image="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" year="2012" link="https://www.imdb.com/title/tt4154796/" />
                </Grid>
                <Footer />

            </div>
        );
    }
}

export default App;