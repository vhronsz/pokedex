import React from "react";
import "./pokemon-card.css";

const PokemonCard = (props) => {
    return (
        <div className={"pokemon-card"}>
            <div className={"card-container-image"}>
                <img className={"card-image"} src={"/placeholder.png"} />
            </div>
            <div className="card-info">
                <div className="name">
                    Pokemon name
                </div>      
                <div className="type">
                    
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;