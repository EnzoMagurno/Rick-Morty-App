import React from "react";
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";



class Nav extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <SearchBar onSearch={this.props.onSearch}/>
      <Link to=''>About</Link><br />
      <Link to='/home'>Home</Link>
      </div>
    )
  }
}
export default Nav