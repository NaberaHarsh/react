import React from 'react';
// import logo from './logo.svg';
import './App.css';
//import { arrayExpression } from '@babel/types';
import './paper.css'


class Project extends React.Component{
    constructor(props){
      super(props);
      this.state={}; 
      this.state.item=this.props.item;
      this.state.newItem={};
      
    }

  setStatus(y){
let p=this.state.item;
let i=p.indexOf(y);
p[i].status = !p[i].status;
this.setState({
    item:p
})
    }
getList(props){
let items=[];
items=this.state.item.map((ele)=><li className="paper-btn btn-block"  onClick={(y)=>{this.setStatus(y)}; {this.newItem.status=false}}>{ele}</li>)
return items;
    }

getValue(e){ 
   this.newItem= e.target.value
}

setValue(e){
    if(this.newItem){
    console.log(e.target.value)
    let l=this.state.item;
    l.push(this.newItem)
    this.setState(
      {item : l, newItem: ''}
          )
          if(this.setStatus){
              <li className=" btn-success"></li>
          }
      
        }
    
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

export default Project;