import React from "react";
import {Link} from "react-router-dom"
import "./style.css"

export function DeleteBtn(props){
    return(
        <span className="delete-btn btn btn-primary" {...props} role="button" tabIndex="0">
      ✗ Delete
    </span>
    )
};

export function SortBtn(props){
  return(
    <button className="sort-btn btn btn-success my-2 text-light " {...props} role="button" tabIndex="0">
      <Link to={props.to} style={{color: "white"}} >
        {props.children}
      </Link> 
    </button>
  ) 
};