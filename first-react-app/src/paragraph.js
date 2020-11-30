import React from "react";

const CustomComponent=({text,deleteText})=>{
   return(
   <p onClick={deleteText}>{text}</p>
   )
}

export default CustomComponent;
