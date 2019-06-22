import React from 'react';
import News from './news';
import Mail from './email'
// import Medical from './Medical';
// import Books from './Books';

class External extends React.Component{

  constructor(props){
    super(props)

  }
  
  getBooks


  render(){
    return (
      <div>
          <Mail />
        {/* <News/> */}
        {/* <Books/> */}
        {/* <Medical>
          
        </Medical> */}
      </div>
      );
  }
  
}

export default External;