import React from 'react'


export default class CoordinatesButton extends React.Component{
constructor(props){
  super(props)
}
handleClick = (event) => {
  let coordinateArray = []
  coordinateArray.push(event.clientX)
  coordinateArray.push(event.clientY)
  this.props.onReceiveCoordinates(coordinateArray)
}

render(){
  return (<button onClick={this.handleClick}/>)
  }
}
