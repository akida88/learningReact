import React, { Component } from "react";
import CustomComponent from "./paragraph";
class Custom extends Component{
   render(){
      const {text,deleteText}=this.props;
      return(
         <CustomComponent deleteText={deleteText} text={text}/>
      )
   }
}

export default Custom;