import React from "react";
import Search from "./Search";
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';

const Header = () => {
    return (
        <header className="header">
            <h1><LocalMoviesIcon />Movie Search</h1>
            <Search />
        </header>
    );
};

export default Header;