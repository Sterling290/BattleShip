import React, { Component} from 'react';
import {Row,Col,Container,Media} from 'react-bootstrap';
import './App.css';
import styling from './Grid.css'



class  ShipGrid extends React.Component {
constructor(props){
super(props);
}


  render(){
var horArray = []
var twoX = 0
var threeX = 0
var fourX = 0
var array = []
var newArray = []
var arrayRows = []

for(var i = 0; i < 101;i++){
  if(i !== 0){
array.push(i)
  }
      }
    return(
    <div>

       <Media>
         {/* test button */}
       <button onClick ={(e)=> e.preventDefault(
        document.getElementById("result").style.display = "none",
        newArray.length = 0,
        arrayRows.length = 0,
        horArray.length = 0,
         array.map((each)=>{ 
          if(each !== 0 && document.getElementById(`${each}`).style.background === ""){arrayRows.push(0)}
          else if( each !== 0 && document.getElementById(`${each}`).style.background === "rgb(200, 120, 30)"){arrayRows.push(0)}else if(each !== 0){arrayRows.push(1)}
          if(arrayRows.length === 10){newArray.push(arrayRows.slice())}
          if(arrayRows.length === 10){arrayRows.length = 0}
        }),
        //horizontal test
        newArray.map((every,x)=>{
        newArray.map((each,i)=>{
          if (i !== 9 ){
            horArray.push(each[x])
          }else if (i === 9){
            horArray.push(each[x])
            console.log(JSON.stringify(horArray.slice().join("")).split("0"))
            JSON.stringify(horArray.slice().join("")).split("0").map((every,z)=>{
              if(z === 0){   
                if(every.split(`"`)[1].length === 2){twoX += 1}else if(every.split(`"`)[1].length === 3){threeX += 1}else if(every.split(`"`)[1].length === 4){fourX += 1}
              }else if(z === 9){
                if(every.split("").slice(0,every.split("").length - 1).join("").length === 2){twoX += 1}else if(every.split("").slice(0,every.split("").length - 1).join("").length === 3){threeX += 1}else if(every.split("").slice(0,every.split("").length - 1).join("").length === 4){fourX += 1}
              }else{
                if(every.length === 2){twoX += 1}else if(every.length === 3){threeX += 1}else if(every.length === 4){fourX += 1}
                 }
            
              })
            horArray.length = 0
          } 
        })
      })
        ,
        console.log(newArray)
        ,
        //Verticle test
        newArray.map((each)=>{
         JSON.stringify(each.join('')).split('0')
         .map((every,i)=>{
           if(i === 0){
            if(every.split(`"`)[1].length === 2){twoX += 1}else if(every.split(`"`)[1].length === 3){threeX += 1}else if(every.split(`"`)[1].length === 4){fourX += 1}
           }else if(i === JSON.stringify(each.join('')).split('0').length - 1){
            if(every.split("").slice(0,every.split("").length - 1).join("").length === 2){twoX += 1}else if(every.split("").slice(0,every.split("").length - 1).join("").length === 3){threeX += 1}else if(every.split("").slice(0,every.split("").length - 1).join("").length === 4){fourX += 1}
           }else{
          if(every.length === 2){twoX += 1}else if(every.length === 3){threeX += 1}else if(every.length === 4){fourX += 1}
           }
        })
        })
        ,
        //show count values
        console.log(newArray),console.log(`2x:${twoX} 3x:${threeX} 4x:${fourX}`)
        ,
        
        //change div to checkmark if all is true
        //clear count variables
        twoX === 2? document.getElementById("2x").innerHTML = "&#9745;": document.getElementById("2x").innerHTML = "&#9746;",
        threeX === 3? document.getElementById("3x").innerHTML = "&#9745;" : document.getElementById("3x").innerHTML = "&#9746;",
        fourX === 1? document.getElementById("1x").innerHTML = "&#9745;" : document.getElementById("1x").innerHTML = "&#9746;",
        twoX === 2? threeX === 3? fourX === 1? document.getElementById("result").style.display = "block":console.log("false"):console.log("false"):console.log("false"),
        twoX  = 0,
        threeX = 0,
        fourX = 0,
       
        )}>test</button>

       <a className="submit" id = "result"   onClick = {(e) => e.preventDefault(this.setState({array:11}),console.log(this.props))}
       >submit</a>





       {/*  check: &#9745;   x:&#9746;      */}
       <p>2x:2Block  <box className="checkmark" id ="2x">&#9746;</box> 
       &nbsp; &nbsp; &nbsp; 1x: 4Block   <box className="checkmark" id ="1x">&#9746;</box> 
       &nbsp; &nbsp; &nbsp; 3x: 3Block   <box className="checkmark" id ="3x">&#9746;</box>        
       </p>
      <Media.Body>
      {/* the grid */}
      <div className ="wrapper">
      {array.map((each)=> <box onClick ={(e) => e.preventDefault(document.getElementById(`${each}`).style.background === ""?document.getElementById(`${each}`).style.background = "rgb(100, 140, 30)":
      document.getElementById(`${each}`).style.background === "rgb(200, 120, 30)"? document.getElementById(`${each}`).style.background = "rgb(100, 140, 30)":
      document.getElementById(`${each}`).style.background === "rgb(100, 140, 30)"? document.getElementById(`${each}`).style.background = "rgb(200, 120, 30)":console.log(document.getElementById(`${each}`).style.background)
      )} className="boxx" id={each}>{each}</box>
      
      )}
      </div>
    
      </Media.Body>
      </Media>  
    </div>
    )
  };
}

export default  ShipGrid;