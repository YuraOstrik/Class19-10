 import React from "react";

 export function Forms(props)
 {
    return <>
    <div id="Mainform"> 

        <div class="item"> <input/> </div>
        <div class="item"> Hello </div>
        <div class="item" className={props.confirm}> Confirm </div>
        <div class="item"> Hello </div>
        <div class="item"> Hello </div>
    </div>   
    
    </>
 }