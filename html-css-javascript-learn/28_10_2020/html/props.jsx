//introduction to props: properties for components
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.name}!</h1>
                <h1>App 1</h1>
            </div>
        );
    }
}

class App2 extends React.Component{
    render(){
        let style = {color: 'red'};
        return(
            <div>
                <h1 style={style}>
                    Hello {this.props.name}!
                </h1>
                <h1>app 2</h1>
                {/*
                    <p>This JSX will not be rendered because it is commented out</p>
                */}
            </div>
        );
    }
}


class App3 extends React.Component {
    render(){
        let style = {color: "red"};
        return (
            <div>
                <h1 style={style}>Hello {this.props.name}!</h1>
                <p className="primary-text">This should be large blue text</p> 
                {/*we cannot use the normal class notation to add class in js as class in js is a reserved word*/}
            </div>
        );
    }
}

class App4 extends React.Component{
    render(){
        let name = this.props.name;
        if (name === 'Tim'){
            name = 'favorite instructor';
        } else if  (name === 'Matt' || name === 'Elie'){
            name = 'very solid instructor';
        }
        return(
            <div>
                <p>{this.props.name}</p>
                <p>{name}</p>
                {name === 'student' ? (
                    <h1>Good job on the course so far!</h1>
                ) : (
                    <h1>Hello, {name}!</h1>
                )}
            </div>
        );
    }
}

ReactDOM.render(<App4 name="Tim" />, document.getElementById("app"));

//you can see that this.props.name is wrapped around curly braces
//in fact, anycode wrapped in curly braces will evaluate Js

//for some unknown reasons, App3 does not run. needed to be checked later

//as we can see,the website right now is rather slow
//the reason is that we are transpiling our JSX on our client side
//so we need tools to help us with transpiling our JSX - webpack

