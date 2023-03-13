import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './nav.module.css'


const Nav = (props) =>{
    return(
      <div>
      <SearchBar onSearch={props.onSearch}/>
      <Link className={style.navLink} to='/about'>About</Link><br />
      <Link className={style.navLink} to='/home'>Home</Link>
      </div>
    )
  }


export default Nav