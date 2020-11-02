//pure functions and setState
import React, {Component} from "react";
import { render } from "react-dom";

class App2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            people: [
                {name: "Michael"},
                {name: "Elie"},
                {name: "Matt"},
                {name: "Angelina"}
            ]
        };

        setTimeout(this.addName.bind(this), 5000);
    }

    addName(){
        const newPeople = this.state.people.slice();
        newPeople.push({name: "Whiskey"});
        this.setState({people: newPeople}, () => {
            console.log(this.state.people);
        });
    }

    render(){
        let peeps = this.state.people.map(p => {
            return <p key={p.name}>{p.name}</p>;
        });
        return <div>{peeps}</div>
    }
}

render(<App2 />, document.getElementById("root"));

//as we can see, we do not directly change the content of this.props.people
//we create a new array and use this.setState to change people property
//So functions with this.setState has to be pure function (except the the setState part)

//the reason is that setState is Asynchronous
//So even though you thought you just call setState and change sth, that value may not be changed immediately
//if you need to check the state after it has been updated, you can provide
//another parameter to setState, which is a callback function that will be invoked once the state ahs been updated

//passing an updater function to setState
export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 1
        };

        setInterval(() => {
            this.setState(
              (prevState, props) => {
                // Updating based on the previous value
                return { counter: prevState.counter + 1 };
              },
              () => {
                // Printing the update to the console
                console.log(this.state.counter);
              }
            );
          }, 500);
    }

    render(){
        return <div>Counter: {this.state.counter}</div>
    }
}

//setState can take an updater function rather than a new object
//this function is predefined to take at most 2 arguements
//first one is prevState (previous state) which grants you access to the previous state as an object
//second one is the props

//to pass data down from a child component, we will give the data to the child as prop
