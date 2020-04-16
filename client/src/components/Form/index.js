import React from "react";
import {Link} from "react-router-dom"



export function Input(props) {
    return (
        <div className = "input-group" {...props}>
            <input type="text" className= "form-control" />
            <div className="input-group-append">
                <span className="input-group-text btn btn-success"> {props.text} </span>
            </div>
            

        </div>
    )
};

export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success">
        <Link to = "/Main" style={{color: "white"}} >
        {props.children}
        </Link> 
      </button>
    );
  };

export function EmployeeInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
