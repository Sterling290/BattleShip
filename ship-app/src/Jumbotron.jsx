import React, { Component  } from 'react';
import {Jumbotron,Container} from 'react-bootstrap';
import styled from 'styled-components'
import backgroundImage from './backgroundImage.png'
import oceanImage from './oceanImage.jpg'
import testImage from './testImage.png'
class JumboTron extends React.Component {
constructor(props){
super(props);
this.state = {}
}
render(){
    const Styles = styled.div`
    .jumbo{
        background: url(${oceanImage}) no-repeat fixed bottom;
        background-size: cover;
        color:#ccc
        height:100px;
        position:relative;
        z-index -2;
        margin-bottom: 0px ;
        
        
        
        }
        .overlay{
            // background-color:#A52A2A;
            opacity: 0.6;
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            right:0;
            z-index -1;
        
        }
    
    `
return(
<div>
<Styles>
<Jumbotron fluid className="jumbo">
<div className="overlay"></div>
<Container>
<h1><img src={testImage}/> Battle Ship</h1>
</Container>
</Jumbotron>
</Styles>
</div>
)
}
}
export default JumboTron