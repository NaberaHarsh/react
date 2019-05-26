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
      this.state.newItemName={};
      this.state.number=0;
      this.state.per=0;
      this.state.num=0;
      this.setStatus=this.setStatus.bind(this);
      this.getValue=this.getValue.bind(this);
      this.setValue=this.setValue.bind(this);
      this.Progress=this.Progress.bind(this);
      this.completed=this.completed.bind(this);
      
          
      // this.Sort=this.Sort.bind(this);
      // this.state = {
      //   sortDirection: 'descending',
      //   data: this.state.data.sort(descending)
    // };
           
      
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
      }
  this.state.num=count;
  this.setState({
    num:count
  })
      }

      Progress(){      
        
     let numb=this.state.num/this.state.item.length;
     console.log(numb);
     this.setState(
     {per:numb*100}
     )
       
      }

getList(props){
let items=[];
items=this.state.item.map((ele,i)=> <ListItem key={i} ele={ele} setStatus={this.setStatus} up={()=>this.up(i)} down={()=>this.down(i)} delete={()=>this.delete(i)} GoToTop={()=>{this.GoToTop(i)}} Progress={()=>{this.Progress()} }  ></ListItem> )

return items;

    }

getValue(e){ 
   this.newItemName= e.target.value
}

setValue(e){
    if(this.newItemName){
    console.log(e.target.value)
  let d=new Date();
    let obj= {name:this.newItemName,status:false,date:d.toLocaleString()}
    let l=this.state.item;
    l.push(obj)
    this.setState(
    {item:l}
          )
          this.newItemName="";
        }     
    document.getElementById("aa").value='';
    this.Progress()
  }
 
   up=(i)=>{
     let x=this.state.item;
    if(i!=0)
    {
      [x[i],x[i-1]]=[x[i-1],x[i]]
    }
    else
    alert("This item is already at Top");
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
    
    else
    alert("This item is already at Bottom");
this.setState({
  item:x
})
  }

  delete(i){
    alert("Are you sure you want to Delete");
    let count=this.state.number;
    if(this.state.item[i].status)
    count--;
    this.setState(
      {number:count}
    )
    let x=this.state.item;
      x.splice(i,1);
    this.setState({
      item:x
    })
    let numb=count/this.state.item.length;
     console.log(numb);
     this.setState(
     {per:numb*100}
     )

  }

  GoToTop(i){
    let y=this.state.item;
    [y[i],y[0]]=[y[0],y[i]]
    console.log(i);
    for(let j=i; j>1;j--){
    [y[i-1],y[j]]=[y[j],y[i-1]]
  i--;  
  }
    this.setState({
      item:y
    })
}

// sortAscending = () => {
//   const { item } = this.state;
//   item.sort((a, b) => a - b)    
//   this.setState({ item })
// }

// sortDescending = () => {
//   const { item } = this.state;
//   item.sort((a, b) => a - b).reverse()
//   this.setState({ item })
// }

//   sortData() {
//     if(this.state.sortDirection ==='descending') {
//         this.setState({ 
//             sortDirection: 'ascending',
//             data: this.props.item.sort(sortAscending)
//         });
//     } else {
//         this.setState({ 
//             sortDirection: 'descending',
//             data: this.props.item.sort(sortDescending)
//         });
//     }
// }

completed(){
//  let count=0;
//   for(let i of this.props.item)
//   {
//     if(i.status)
//   {count++;}
// }
  console.log("0");

}

render(){
    return <div>
      <h2 className="row flex-center">ToDo List</h2>
      <div style={{display:'flex'}}>
  <input id="aa"  onChange={(ele)=>{this.getValue(ele)}}  ></input>
  
  <button onClick={this.setValue.bind(this)} className="btn-outline-info" id="dd">ADD ITEM</button>
  </div>
      <p className="row flex-center" style={{marginTop:20}}>Completed Items:{this.state.number} /{this.state.item.length}</p>
      <ul>{this.getList()}</ul>  
      <select >
        <option onClick={this.completed}>by complete</option>
        </select>  
        <div className="progress" >
  <div className="progress-bar  progress-bar-striped bg-warning progress-bar-animated" role="progressbar" style={{width:`${this.state.per}%`}}></div>
          </div> 

     </div>
  }
}

class ListItem extends React.Component{
  constructor(props){
    super(props);
  }
  
render(){
  return <div style={{display: 'flex'}}>
  <li onClick={()=>{this.props.setStatus(this.props.ele) ; this.props.Progress()}} onDoubleClick={(i)=>{this.props.GoToTop()}} id="cc" className={this.props.ele.status ? " paper-btn btn-block btn-success": "paper-btn btn-block"} >{this.props.ele.name}<div style={{marginLeft :650, position: 'absolute'}}>{this.props.ele.date}</div></li>
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