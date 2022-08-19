import React from "react";
import "./TeamCard.css";

export default function TeamCard({name, points, onDeleteTeam}) {
    return (
        <div className="team-card">
            <p>{name}</p>
            <p>{points}points</p>
            <button onClick={onDeleteTeam}>X</button>
        </div>
    );
}