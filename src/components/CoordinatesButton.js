// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  displayCoordinates = (event) => {
    return [event.clientX, event.clientY]
  }

  render(){
    return(
      <button onClick={(event) => this.props.onReceiveCoordinates(this.displayCoordinates(event))}>Show Coordinates</button>
    )
  }
}
