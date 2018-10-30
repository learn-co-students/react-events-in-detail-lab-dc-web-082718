// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {


    handleDelay = (e) => {
        e.persist()
        const cb = () => {this.props.onDelayedClick(e)};

        const time = setTimeout(cb,this.props.delay);
    
    }

    render(){
        return (<button onClick={this.handleDelay}>DelayedCoord</button>);
    }


}
