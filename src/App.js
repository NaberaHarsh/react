import React from 'react';
import logo from './logo.svg';
import './App.css';
import { arrayExpression } from '@babel/types';

/*
function First(){
return <div>
  <h1>hello world</h1>
  <h1>hello react</h1>
  </div>
}

function Second(props){
  return <div>
    <h2>this is {props.name}</h2>
  </div>
}


function Parent()
{
  return(
    <div>
      <First />           
      <Second name="harsh"></Second>
      </div>  
  )
    }

export default Parent;
*/


function App(props){
  return(
  <div>
    <h1>hello {props.msg1}</h1>
    <h1>hello {props.msg2}</h1>
  </div>)
}

/*function OtherComponents(props)
{
  let Output
  if(props.msg)
  Output=<h2 className={props.cName}>{props.msg}</h2>
  else
  Output=<h2 className={props.cName}>No Message to Show</h2>
  return Output;

}
*/

function OtherComponents(props)
{
  return props.msg? <h2 className={props.cName}>{props.msg}</h2>:<h2 className={props.cName}>No Message to Show</h2>
}





function Practise(props){
  if(props.item){
var arr=[];
for(let i=0; i<props.item.length; i++)
{
  arr.push(<li>{props.item[i]}</li>)
}
return <ul>{arr}</ul>
  }
else 
 return <h3>list is empty</h3>;
}


/*
function Message(props)
{
  let val = props.val;
  for(let i=0;i<val.length;i++)
  {
    return(
      <div>
   <h1>{val[i]}</h1>
 </div>
  
    )
 }
  
}*/

function Parent(){
  return(
    <div>
      <App msg1="first message" msg2="second message" />
      <OtherComponents cName="styled" msg="message"></OtherComponents>
      {/* <Message val={["First Message","Second Message"]} /> */}
      <Practise item={["honda","skoda","audi"]} />

    </div>

  )
}

export default Parent;
