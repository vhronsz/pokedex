import React,{useState} from "react";
import "./style.css";

const SideMenu = (props)=>{
    return(
        <div id={"side-menu"}>
            <div id={"title-section"}>
                <div id={"side-menu-title-section"}>
                    <img id={"logo"} src={"/logo.png"}/>
                    <div id={"title"}>Working Title</div>
                </div>
            </div>

            <div id={"menu-main-section"}>
                <a href={"/pokédex"} className={"side-menu-item"} >
                    Pokédex
                </a>
                <div className={"side-menu-item"}>
                    Pokédex
                </div>
                <div className={"side-menu-item"}>
                    Pokédex
                </div>
                <div className={"side-menu-item"}>
                    Pokédex
                </div>
            </div>
        </div>
    );
}

export default SideMenu;