import React from "react";
import "./style.css";
import SideMenu from "../../component/Side_Menu";

const Master = (props)=>{
    const [content] = {props};

    return(
        <div className={"pages"}>
            <SideMenu/>
            <div className={"master-container"}>
                {content}
            </div>
        </div>
    );
}

export default Master;