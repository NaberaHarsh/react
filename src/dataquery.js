// import React from 'react'
// import {Card, Button } from 'react-bootstrap'

// class Data extends React.Component{
//     constructor(props){
//     super(props);
//     this.state={};

//     this.state.db={
//         product:[
//             {
//                 name:"harsh",
//                 age:"21",
//                 city:"ajmer"
//             },
//             {
//                 name:"pratiksha",
//                 age:"21",
//                 city:"sabji mandi"
//             }
//         ]
//     }
//     }

//     render(){
//         return(
//             <Products db={this.state.db}  />
//         )
//     }
        
//     }

//     class Products extends React.Component{
     
//         render(){
//             return(
//                 <div>    
//                     <button onclick={this.props.db.product.map()}>call</button>
                
//                         <Card style={{ width: '18rem' , marginTop:20  }}>
//   <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/817ikEuotyL._UX395_.jpg" />
//   <Card.Body style={{textAlign:"center"}}>
//     <Card.Title >Jhumki</Card.Title>
//   </Card.Body>
// </Card>
// </div>             
             
//             )
//         }
//     }

//     export default Data;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Icon,Pagination } from 'antd';

import Products from './product';
import Cart from './cart';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends React.Component{

  constructor(props){
   super(props)
    this.state= {}
    this.state.db = {

    products : [],
    cart :[],
    page:1

   }



  }

  componentDidMount(){
    axios.get('http://5cfe5a23ca949b00148d3ff2.mockapi.io/products')
    .then((res)=>{
      
    let db = this.state.db;
    db.products = res.data;
      this.setState({
         db:db
      })
    })
  }


  addProductToCart(item){
   let db = this.state.db;
   item.quantity = 1;
   db.cart.push(item);
   this.setState(
     {db:db}
   )
   console.log(db);

  }

  pageChanged(page){
    let db = this.state.db;
    db.page = page;
    this.setState(
      {db:db}
    )
  }

  changeQuantity(item,e){

    let db = this.state.db;
    let i = db.cart.indexOf(item)
     db.cart[i].quantity = parseInt(e.target.value); 
    this.setState(
      {db:db}
    )
    console.log(db);
  }


  render(){ return (
    <div>
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
        <Link to="/"> <Icon type="home" />
          Home
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/cart"><Icon type="shopping-cart" />
          Cart
          </Link>
        </Menu.Item>
        </Menu>
    
      <Route path="/" exact render={()=><Products db={this.state.db} addProduct={this.addProductToCart.bind(this)}  pageChanged={this.pageChanged.bind(this)}></Products>}/>
      <Route path="/cart" render={()=><Cart db={this.state.db} changeQuantity={this.changeQuantity.bind(this)}></Cart>}/>
    </Router>
    </div>
     
  );
}
}

export default App;