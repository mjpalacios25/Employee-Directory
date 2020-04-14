import React from "react";
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
    <button className="sort-btn btn btn-success" {...props} role="button" tabIndex="0">
      Sort stuffs
    </button>
  ) 
};