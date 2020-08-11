import React, { Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';

import JumboTron from './Jumbotron.jsx'
import ShipGrid from './Grid.jsx'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Game from './Game.jsx'
import  './App.css';


 class  App extends React.Component  {
  constructor(props){
    super(props);
   this.state = {array: 10}
  }
  render(){
    return(
    <div className="App">
      {/* <div className = "redline"></div> */}
    <React.Fragment>
    
   <JumboTron />
   <div className = "back">
   {/* <NavigationBar/> */}
     {/* <Layout> */}
     <Router>
     <Switch>
     {/* <Route exact path="/" component={ShipGrid} /> */}
     <Route
        path='/'
         render={(props) => <ShipGrid  props={this.state} isAuthed={true} />}
   />
      <Route
        path='/game'
         render={(props) => <Game  props={this.state.array} isAuthed={true} />}
   />
     {/* <Route path="/game" component={Game} /> */}
     {/* <Route component={NoMatch} /> */}
     </Switch>
     </Router>
     {/* </Layout> */}
     <br></br>
     <br></br>
     
     
     </div>
   </React.Fragment>









      {/* <JumboTron/>
      <hr></hr>
       <ShipGrid/>
      
    <div> hello</div> */}
    </div>
    )
  };
}

export default App;
