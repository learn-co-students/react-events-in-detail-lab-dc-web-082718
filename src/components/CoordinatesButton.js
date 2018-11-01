// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  coordinateHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }


  render() {
    return(
      <button onClick={this.coordinateHandler}>Press me</button>
    )
  }
}

export default CoordinatesButton;
