import React,{useState} from 'react';
import './App.css';
import CustomComponent from "./paragraph";
import Custom from "./CustomClass";
function App() {
  const [inputText,setIntputText]=useState("");
  const [texts,setTexts] =useState(["first","second","third","forth"]);
  const removeText = (text)=>{
   console.log(text)
   debugger;
   const index= texts.findIndex(t=>t===text);
   texts.splice(index,1);
   setTexts([...texts])
 }
  return (
      <div>
      <input name="text" className="App-link" onChange={e=>setIntputText(e.target.value)}></input>
      <hr/>
      <p>{inputText}</p>
      <hr/>
      <button type="button" style={{display:"inline-block",
       border:"0",backgroundColor:"red",
       height:"20px",width:"20px"}}
       onClick={()=>alert("hovered button")} ></button>
      <hr style={{marginTop:"20px" }}/>
      {texts.map(t=><Custom  deleteText={()=> removeText(t)} text={t}/>)}
      <br/>
      <hr/>
      {texts.map(t=><Custom  deleteText={()=> removeText(t)} text={t}/>)}
      </div>
  );
}

export default App;
