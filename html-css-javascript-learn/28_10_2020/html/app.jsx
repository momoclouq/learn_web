class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Here's my first React App!</h1>
          <MyComponent />
        </div>
      );
    }
  }

  class MyComponent extends React.Component{
    render(){
      return(
        <div>
            <h2>Here's a component!</h2>
            <p>Aww yeah.</p>
        </div>
      );
    }
  }
  
ReactDOM.render(<App />, document.getElementById("app"));

//in order to write HTML in javascript, you have to use JSX and Babel
//the code above is using JSX, but we have to also use Babel to understand JSX
//to do the conversion (from JSX to javascript), we need to use transpliers
//babel: a transpiling framework
