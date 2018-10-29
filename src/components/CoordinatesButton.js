// Code CoordinatesButton Component Here
import React from "react"

class CoordinatesButton extends React.Component{

  handleClick = (e) =>{
    const coords = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render(){
    return(
      <div className = "DelayedButton">
        <button onClick = {this.handleClick}>This Is a Button</button>
      </div>
    )
  }
}

export default CoordinatesButton
