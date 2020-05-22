import styling from './Game.css'
import React, {Component} from 'react';
import {Row,Col,Container,Media} from 'react-bootstrap';



class Game extends React.Component {
constructor(props){
super(props);
this.state = {array: 0}
}
componentDidMount(){
  this.setState({array: 4})

}
render(){
return(
    <div>
        cool
    </div>
)

}

}
export default Game