import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './project.css';
//import { arrayExpression } from '@babel/types';
import './paper.css'


class Project extends React.Component{
    constructor(props){
      super(props);
      this.state={}; 
      this.state.item=[]
      this.state.newItemName="";
      this.state.number=0;
      this.setStatus=this.setStatus.bind(this);
      this.getValue=this.getValue.bind(this);
      this.setValue=this.setValue.bind(this);
           
      
    }

  setStatus(ele){
let p=this.state.item;
let i=p.indexOf(ele);
p[i].status = !p[i].status;
this.setState({
    item:p
    })

    let count=this.state.number;
        if(this.state.item[i].status){
      count++;
            this.setState(
        {number:count}
      )
    }
    else{
      count--;
      this.setState(
        {number:count}
      )
        }}

getList(props){
let items=[];
items=this.state.item.map((ele,i)=> <ListItem key={i} ele={ele} setStatus={this.setStatus} up={()=>this.up(i)} down={()=>this.down(i)} delete={()=>this.delete(i)}></ListItem> )

return items;

    }

getValue(e){ 
   this.newItemName= e.target.value
}

setValue(e){
    if(this.newItemName){
    console.log(e.target.value)
    let obj= {name:this.newItemName,status:false}
    let l=this.state.item;
    l.push(obj)
    this.setState(
    {item:l}
          )
        }     
    document.getElementById("aa").value='';
  }
 
   up=(i)=>{
     let x=this.state.item;
    if(i!=0)
    {
      [x[i],x[i-1]]=[x[i-1],x[i]]
    }
this.setState({
  item:x
})
  }
  
  down=(i)=>{
    let x=this.state.item;
    if(i!=this.state.item.length-1)
    {
      [x[i],x[i+1]]=[x[i+1],x[i]]
    }
this.setState({
  item:x
})
  }

  delete(i){
    let x=this.state.item;
    x.splice(i,1);
    this.setState({
      item:x
    })
  }


  render(){
    return <div>
      <h2 className="row flex-center">ToDo List</h2>
  <button  id="bb" onClick={this.setValue.bind(this)} className="row flex-center">CLICK</button>
  <input className="row flex-center" id="aa"  onChange={(ele)=>{this.getValue(ele)}}  ></input>
      <p className="row flex-center">Completed Items:{this.state.number} /{this.state.item.length}</p>
      <ul>{this.getList()}</ul>
        
        
     </div>
  }
}

class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return <div style={{display: 'flex'}}>
  <li onClick={()=>{this.props.setStatus(this.props.ele)}} id="cc" className={this.props.ele.status ? " paper-btn btn-block btn-success": "paper-btn btn-block"} >{this.props.ele.name}</li>
  <button onClick={(i)=>this.props.up()} className="btn-warning" >Up</button>
  <button onClick={(i)=>this.props.down()}  className="btn-info">Down</button>
  <button onClick={(i)=>this.props.delete()}  className="btn-danger">X</button>
  </div> }
}

// class Button extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   UpShift(ele){
//     let p=this.props.item;
//     let i=p.indexOf(this.props.ele);
//   let temp=p[i];
//   p[i]=p[i-1];
//   p[i-1]=temp;
//   this.setState(
//     {item:p}
//   )
//   }
//   render(){
//     return <div>
//       <button onClick={(e)=>this.UpShift(e)}>up</button><button>down</button><button>X</button>
//     </div>
//   }
  
//   }


export default Project;