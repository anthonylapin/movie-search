import React from "react";
import Search from "./Search";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

const Header = (props) => {
    return (
        <header className="header">
            <h1><LocalMoviesIcon />Movie Search</h1>
            <Search search={props.search} />
        </header>
    );
};

export default Header;