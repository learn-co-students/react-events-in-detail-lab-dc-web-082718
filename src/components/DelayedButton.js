// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  delayHandler = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.delayHandler}>
        delay button
      </button>
    )
  }
}

export default DelayedButton;
