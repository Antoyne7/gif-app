import React from "react";
import styles from './searchbar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <div className={styles.inputContainer}>
                <input spellCheck="false" type="text" placeholder="Awesome Gifs"/>
            </div>
        </div>
    )
}

export default SearchBar
