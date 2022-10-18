import loader from "../../Image/loading.gif";
import React from "react";

let Preloader = () => {
    return (
        <img src={loader} style={{width : '250px'}}/>
    )
}

export default Preloader;