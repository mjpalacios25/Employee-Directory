import React from "react";

export function EmplyeeCard({ children }) {
    return (
      <div className="list-overflow-container">
        <ul className="list-group">{children}</ul>
      </div>
    );
  };

export function CardItem({ children }) {
  return <li className="list-group-item">{children}</li>;
};
  
  