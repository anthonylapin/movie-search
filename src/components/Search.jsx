import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

const Search = () => {
    return (
        <form className="search-container" autoComplete="off">
            <input type="text" name="search-item" placeholder="Find a movie..."></input>
            <Fab size="small" className="search-button">
                <SearchIcon />
            </Fab>
        </form >
    );
};

export default Search;