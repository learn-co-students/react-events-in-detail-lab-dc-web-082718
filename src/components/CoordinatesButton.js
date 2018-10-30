// Code CoordinatesButton Component Here
import React, {Component} from 'react';


export default class CoordinatesButton extends Component {


    handleCoord = (e) => {
        const coord = [e.clientX,e.clientY];
        if(this.props.onReceiveCoordinates(coord)){
            console.log(coord)
        }
    }

    render(){
        return (<button onClick={this.handleCoord}>Get Coords</button>)
    }

}
