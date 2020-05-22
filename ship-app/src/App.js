import React, { Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import './App.css';
import JumboTron from './Jumbotron.jsx'
import ShipGrid from './Grid.jsx'
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom'
import Game from './Game.jsx'


 class  App extends Component  {
  render(){
    return(
    <div className="App">
    <React.Fragment>
   <JumboTron />
   <div className = "back">
   {/* <NavigationBar/> */}
     {/* <Layout> */}
     <Router>
     <Switch>
     <Route exact path="/" component={ShipGrid} />
     <Route path="/game" component={Game} />
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
