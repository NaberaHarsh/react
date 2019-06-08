import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Index({history}) {
    return <div>
    <button onClick={e=>{history.push('/users')}}>go</button>
    <h2>First app</h2>;
    </div>
  }
  
  function About() {
    return <h2>Second App</h2>;
  }
  
  function Users({match, history, location}) {
    return <div> 
         
        <h1>{match.params.user}</h1>
    <h2>Third App</h2>;
    </div>
  }

  function AppRouter(){
return (
   

    <Router> 
        
<div>
     
  <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>

          <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/:user" component={Users} />

          </div>
          </Router>

)
}

export default AppRouter;