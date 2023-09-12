import React,{useState} from "react";
import Master from "../Master";

const Homepage = (props)=>{
    const renderHome = ()=>{
        return(
            <div>
                Homepage
            </div>
        );
    }
    return(
        <Master content={renderHome()}/>
    );
}

export default Homepage;