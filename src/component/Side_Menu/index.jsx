import React,{useState} from "react";
import "./style.css";
import {Link} from "react-router-dom";

const SideMenu = (props)=>{
    return(
        <div id={"side-menu"}>
            <div id={"title-section"}>
                <Link to={"/"} id={"side-menu-title-section"}>
                    <img id={"logo"} src={"/logo.png"}/>
                    <div id={"title"}>Working Title</div>
                </Link>
            </div>

            <div id={"menu-main-section"}>
                <Link to={"/pokedex"} className={"side-menu-item"} >
                    Pokédex
                </Link>
            </div>
        </div>
    );
}

export default SideMenu;