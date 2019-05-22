import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import { arrayExpression } from '@babel/types';
import './paper.css'

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



/*function App(props){
  return(
  <div>
    <h1>hello {props.msg1}</h1>
    <h1>hello {props.msg2}</h1>
  </div>)
}
*/

/*
function OtherComponents(props)
{
  let Output
  if(props.msg)
  Output=<h2 className={props.cName}>{props.msg}</h2>
  else
  Output=<h2 className={props.cName}>No Message to Show</h2>
  return Output;

}
*/

/*
function OtherComponents(props)
{
  return props.msg? <h2 className={props.cName}>{props.msg}</h2>:<h2 className={props.cName}>No Message to Show</h2>
}
*/

 /*
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
 */
 
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
/*
function Loop(props){
let xx=[];
for(let yy of props.val){
  xx.push(<h1>{props.val}</h1>);
}
return <div>
  {xx}
</div>
}
*/
/*function App(props){
  let elem=[];
  const JSX = props.msg1.map((elem)=>(<h1>{elem}</h1>))
  return elem;
  }
*/
  

/*class One extends React.Component{
    constructor(props){
    super(props);
  }
render()
{
  return <div>
    <h1>hello world {this.props.name}</h1> 
  </div>
}
  }
  
  class Two extends React.Component {
  
    constructor(props){
      super(props);
      this.clickHandler.bind(this)   // bind to same this of class
    }
  
    clickHandler(event){  // every Event Handler has first argument as Browser events
      console.log(event) 
    }
  
    render(){
      return <div>
       <h1>Hello World {this.props.name} </h1>
       <button onClick={(e)=>{this.clickHandler(e)}}> Click </button>
      </div>
    }
  }
  class Change extends React.Component {
  
    constructor(props){
      super(props);
      this.clickHandler.bind(this)  
      this.state = props   //copying props to this.state
  
    }
  
    clickHandler(event){  
      console.log(event) 
      this.setState({
        name : event.target.value
      })  // this changes name value of state and refreshed the DOM
    }
  
    render(){
      return <div>
       <h1>Hello World {this.state.name} </h1>   
       <input onChange={(e)=>{this.clickHandler(e)}}/>
      </div>
    }
  }
  */

  class Todo extends React.Component{
    constructor(props){
      super(props);
      this.state={};
      this.state.item=this.props.item;
      this.state.newItem="";
    }
    getList(props){
let items=[];
for( let i of this.props.item){
  items.push(<li className="paper-btn btn-block">{i}</li>)
}
return items;
    }

getValue(e){ 
  this.newItem= e.target.value
}
  setValue(e){
    if(this.newItem)
    console.log(e.target.value)

    let l=this.state.item;
    l.push(this.newItem)
    this.setState(
      {item : l}
    )
    
    document.getElementById("aa").value='';
  }

  render(){
    return <div>
      <h2 className="row flex-center">ToDo List</h2>
      <button  id="bb" onClick={this.setValue.bind(this)}  className="row flex-center">CLICK</button>
      <input className="row flex-center" id="aa"  onChange={(ele)=>{this.getValue(ele)}}  ></input>
      <p className="row flex-center">length: {this.props.item.length}</p>
      <ul>{this.getList()}</ul>
      
    </div>
  }
}

export default Todo;
// function Parent(){
//   return(
//     <div>
      
//       <Todo item={["honda"]} />
//       {/* <One name="harsh" /> */}
//       {/* <Change name="Youstart" /> */}
//       {/* <App msg1={["first message","second message"]} /> */}
//       {/* <Two name="harsh" /> */}
//       {/* <OtherComponents cName="styled" msg="message"></OtherComponents> */}
//       {/* <Loop val={["First Message","second meaasge"]} /> */}
//       {/* <Practise item={["honda","skoda","audi"]} /> */}

//     </div>

//   )
// }


