import React, { Component} from 'react';
import {Row,Col,Container,Media} from 'react-bootstrap';
import './App.css';
import styling from './Grid.css'



class  ShipGrid extends React.Component {
constructor(props){
super(props);
this.state = {}
}


  render(){
var array = []
for(var i = 0; i < 11;i++){
  if(i !== 0){
array.push(i)
  }
      }
    
    return(
    <div>

       <Media>
       <box className="boxx" id="Boats">Boats</box>
      <Media.Body>
      {/* <box classname = "backgroundGrid"> */}
      <div className ="wrapper">
      {array.map((each)=> <box className="boxx" id="Boats">{each}</box>)}
      </div>
      {/* </box> */}
      {/* <Container>
      <Row className ="roww">
   
          {array.map((each)=>
           <Col md={{ span: 4, offset: 4 }}><box className="boxx" id={each}>{each}</box></Col>
          )}
       </Row>
      </Container> */}
      </Media.Body>
      </Media>  
    </div>
    )
  };
}

export default  ShipGrid;