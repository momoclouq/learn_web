//as we often want to be able to change our data.
//in React, we store dynamic data as state in the app
//remember: states add complexity to your application

//important state concepts
//1. state should be owned by only one component. Makes it easier to debug! Crucial
//2. When state is changed inside of a component, the render method will eventually be invoked by React
//Changes to state do not always show up right away.

//lets create some state
import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Michael"
        };

        setTimeout(this.changeName.bind(this), 5000);
    }

    changeName = () => {
        this.setState({ name: "Whiskey"});
    };

    render(){
        return(
            <div>
                <h2>Our state is {this.state.name}</h2>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));

//review functional programming concept: pure functions
//a function when invoked should not have any side effects and should not modify
//the parameter it was given

