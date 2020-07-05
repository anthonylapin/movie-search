import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChanges = (event) => {
        setSearchValue(event.target.value);
    }

    const resetSearch = (event) => {
        setSearchValue("");
    }

    const searchItem = (event) => {
        event.preventDefault();
        props.search(searchValue);
        resetSearch();
    }
    return (
        <form className="search-container" autoComplete="off">
            <input type="text" name="search-item" placeholder="Find a movie..." onChange={handleSearchChanges}></input>
            <Fab onClick={searchItem} size="small" className="search-button">
                <SearchIcon />
            </Fab>
        </form >
    );
};

export default Search;