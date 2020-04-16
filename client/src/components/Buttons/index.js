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
    <button className="sort-btn btn btn-success my-2 text-light " {...props} role="button" tabIndex="0">
      
    </button>
  ) 
};