import React,{useState} from "react";
import "./style.css";

const SideMenu = (props)=>{
    return(
        <div id={"side-menu"}>
            <div className={"section"}>
                <div id={"side-menu-title"}>
                    <img id={"logo"} src={"/logo.png"}/>
                </div>
            </div>
            <div className={"section"}>
                <div className={"side-menu-item"}>
                    Pokédex
                </div>
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