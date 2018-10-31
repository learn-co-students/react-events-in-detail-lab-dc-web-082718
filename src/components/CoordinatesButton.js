// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  findCoordinates = (event) =>
  {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render() {
    return (
      <button onClick={this.findCoordinates}>
        Coords
      </button>
    )
  }
}

export default CoordinatesButton
