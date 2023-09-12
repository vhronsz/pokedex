import React,{useState} from "react";
import "./style.css";
import Master from "../Master";
import PokemonCard from "./Component/pokemon-card";

const Pokedex = (props)=>{
    const renderPokedex = ()=>{
        return(
            <div>
                <PokemonCard/>
            </div>
        );
    }
    return(
        <Master content={renderPokedex()}/>
    );
}

export default Pokedex;