// Code DelayedButton Component Here
import React, {Component} from 'react'


export default class DelayedButton extends Component{

  timeOut = (event) => {
    // const saveEvent = event.target
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay
    )
  }

  render(){
    return(
      <button onClick={this.timeOut}>Delayed Button</button>
    )
  }
}
