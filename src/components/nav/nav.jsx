import React from "react";
import SearchBar from "../searchBar/SearchBar";
import style from './nav.module.css'
const Nav = () =>{
    return(
        <div className={style.nav}>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
}

export default Nav