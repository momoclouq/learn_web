import React, {Component} from "react"
import {render} from "react-dom";
import PropTypes from "prop-types";

class Parent extends Component{
    render(){
        return(
            <div>
                <h1>Hi Kids!</h1>
                {this.props.children}
            </div>
        );
    }
}

export default class Kids extends Component{
    render(){
        let greet1 = "Minh";
        return(
            <div>
                <Parent>
                    <h2>These are the children!</h2>
                </Parent>
                <Greeting name = {greet1}></Greeting>
            </div>
            
        );
    }
}

class Greeting extends Component{
    render(){
        return <h1>greetings, {this.props.name}</h1>
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

Greeting.defaultProps = {
    name: "Stranger"
};

//this.props has a special property: children
//this property represents all of the JSX inside of the component
//this.props.children

//propTypes: a tool to monitor the props that a component accepts
//this tool is also good for type checking (only accepts string for that value etc)

