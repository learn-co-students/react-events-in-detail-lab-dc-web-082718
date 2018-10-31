// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  clickHandler = (event) => {

    let array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          COORDINATES BUTTON
        </button>
      </div>
    )
  }
}

export default CoordinatesButton;
