//a lightweight js library that is used to build user interfaces
//core features of react.js
//a declarative API: dont need to know how react is making change to the view
//update the state in js before determining which DOM nodes it needs to change - hence fast (with a hugh DOM)
//Component-based design: a component is a reusable element that can be displayed on the web page. 
//One-way data flow: application state that can change should be wowned by one component (shared data with other components)
//JSC: writing with JSX, you will be able to write HTML directly inside of your js code

class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Here's my first React App!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));