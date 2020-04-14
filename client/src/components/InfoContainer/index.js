import React from "react";

export function InfoContainer({children}) {
    return(
        <div className ="card">
            {children}
        </div>
    )
};

export function CardHeader({children}){
    return (
        <div className="card-header text-center">
            {children}
        </div>
    )
};

export function CardBody({children}){
    return (
        <div className="card-body text-center">
            {children}
        </div>
    )
};
