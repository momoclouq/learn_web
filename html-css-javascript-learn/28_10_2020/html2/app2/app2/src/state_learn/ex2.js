//24 components
import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    render(){
        return (
            <div id="container">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        )
    }
}

class Square extends Component{
    constructor(props){
        super(props);
        this.state ={
            counter: 0
        };
    }

    changeColor() {
        this.setState(
            (prevState) => {
                if(prevState.counter >= this.props.colors.length) return { counter: 0};
                else return {counter: prevState.counter++};
            },
            () => {
                console.log(this.state.counter);
            }
        );
    }

    render(){
        return(
            <div className = "square" style={this.props.colors[this.counter]} onClick={this.changeColor.bind(this)}/>
        );
    }
}

Square.defaultProps = {
    colors: [
    {color: "red"},
    {color: "blue"},
                {color: "yello"},
                {color: "brown"},
                {color: "orange"},
                {color: "green"},
                {color: "violet"},
                {color: "black"},
                {color: "#ffa8cb"},
                {color: "#a8ffcb"},
                {color: "#128741"},
                {color: "#124e87"},
                {color: "#87127a"},
                {color: "#6f2a67"},
                {color: "#6f422a"},
                {color: "#ddbaa6"},
                {color: "#75330f"},
                {color: "#0f7075"},
                {color: "#0f1b75"},
                {color: "#470f75"},
                {color: "#dd901d"},
                {color: "#847e75"},
                {color: "#752cce"},
                {color: "#9f5b92"}
    ]
}