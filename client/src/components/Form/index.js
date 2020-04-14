import React from "react";



export function Input(props) {
    return (
        <div className = "input-group" {...props}>
            <input type="text" className= "form-control" />
            <div className="input-group-append">
                <span className="input-group-text btn btn-success">Search</span>
            </div>
            

        </div>
    )
};
