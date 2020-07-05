import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Movie from "./Movie";
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Container maxWidth="sm">
                    <Movie />
                </Container>
                <Footer />
            </div>
        );
    }
}

export default App;