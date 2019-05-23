import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import { arrayExpression } from '@babel/types';
import './paper.css'


class Project extends React.Component{
    constructor(props){
      super(props);
      this.state={}; 
      this.state.item=[]
      this.state.newItemName="";
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
    }
getList(props){
let items=[];
items=this.state.item.map((ele)=><ListItem ele={ele} setStatus={this.setStatus}></ListItem>)
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
          )}
    document.getElementById("aa").value='';
  }

  render(){
    return <div>
      <h2 className="row flex-center">ToDo List</h2>
      <button  id="bb" onClick={this.setValue.bind(this)}  className="row flex-center">CLICK</button>
      <input className="row flex-center" id="aa"  onChange={(ele)=>{this.getValue(ele)}}  ></input>
      <p className="row flex-center">length: {this.state.item.length}</p>
      <ul>{this.getList()}</ul>
      
    </div>
  }
}

class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return <li onClick={()=>{this.props.setStatus(this.props.ele)}} className={this.props.ele.status ? " paper-btn btn-block btn-success": "paper-btn btn-block"} >{this.props.ele.name}</li>
}
}

export default Project;