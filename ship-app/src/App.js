import React, { Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import JumboTron from './Jumbotron.jsx'
import ShipGrid from './Grid.jsx'


 class  App extends Component  {
  render(){
    return(
    <div className="App">
      <JumboTron/>
      <hr></hr>
       <ShipGrid/>
      
    <div> hello</div>
    </div>
    )
  };
}

export default App;
