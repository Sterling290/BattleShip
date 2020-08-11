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
        //background-size: cover;
         background-size: 100%, 100%;
        color:#ccc
        // height:30%;
        position:block;
        // z-index -2;
        // margin-bottom: 0px ;
        //  margin-top: 0px ;
        // display: flex;
        // margin-top:0px;
        
        
        
        
        }
        .redline {
           background-color: #282c34;
        //    background-color:#fad0e0;

          width: 100%;
           height:50px;
           top:1px;
           margin-bottom:0px;
        //    display: block;
           /* margin-bottom:0px; */
            /* min-height: 2vh; */
            /* display:flex; */
            /* height: 20px; */
            /* padding-bottom:30px ; */
          
          
          }
          .grayline {
            background-color: rgb(122,123,111);
          width: 100%;
           height:50px;
           margin-bottom:0px;
        //    display: block;
           /* margin-bottom:0px; */
            /* min-height: 2vh; */
            /* display:flex; */
            /* height: 20px; */
            /* padding-bottom:30px ; */
          
          
          }




        .overlay{
            margin-top:0px;
            // background-color:#A52A2A;
            opacity: 0.6;
            position:absolute;
            // display:flex;
            top:0px;
            left:0px;
            bottom:0px;
            right:0px;
            z-index -1;
        
        }
   
        .title{
            // display:inline-block;
            // vertical-align:top;
            // font-size: 250%;
            display: grid;
            grid-template-columns: repeat(2,1fr);
            grid-gap: 1px;
           
        }
        // .wrapper {
        //     display: grid;
        //     grid-template-columns: repeat(10, 1fr);
        //     grid-gap: 10px;
        //     grid-auto-rows: minmax(20px, 10px);
        //     background-color: black;
        //     width:50%;
        //     border:3px;
        //     padding:5px;
        //   }
          .bship{
            font-size: 250%;
            padding:5px;
            border:3px;
            
          }
    
    `
return(
<div>
<Styles> 
<Container> 
 
    <Jumbotron fluid className="jumbo">
    
    <div className="overlay"></div>

    
    {/* <div className = "grayline">Battle Ship</div> */}
    <div className = "redline"></div>
    
    
       <div className= "title">
       <div><img src={testImage}/></div> 
        <div className = "bship">Battle Ship</div>
       </div>
      
    </Jumbotron>
    </Container>
    <div className = "redline"></div>
    </Styles>
    </div>
    








)
}
}
export default JumboTron