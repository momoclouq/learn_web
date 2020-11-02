class Part1_1 extends React.Component{
    render(){
        return (
            <h1>My very first component</h1>
        );
    }
}

class Part1_2 extends React.Component{
    render(){
        return(
            <h2>My second component</h2>
        );
    }
}

class Part1_3 extends React.Component{
    render(){
        return(
            <p>My name is {this.props.name}</p>
        );
    }
}

//Part2_1,2,3
class Tweet extends React.Component{
    render(){
        let username = this.props.t1.username;
        let name = this.props.t1.name;
        let date = this.props.t1.date;
        let data = this.props.t1.data;
        return(
            <div>
                <div className="userName">{username}</div>
                <p>{name} - {date} - {data}</p>
            </div>
        );
    }
}

class App extends React.Component{
    render(){
        let tweet1 = {name: "Mashiro", username: "white cat", data: "05.29.1990", data:"I like cake"};
        let tweet2 = {name: "Momo", username: "little devil", date: "08.70.1022", data: "I want to be with you"};
        let tweet3 = {name: "minh", username: "the procrastinator", date: "01.01.1999", data: "I wanna be focused"};
        return(
            <div>
                <h1>list of tweets </h1>
                <Tweet t1 = {tweet1} /> 
                <Tweet t1 = {tweet2} />
                <Tweet t1 = {tweet3} />
            </div>
        )
    }
}

//Part3
class Person extends React.Component{
    render(){
        let name = this.props.person.name;
        let age = this.props.person.age;
        let hobbies = this.props.person.hobbies;
        let hobbiesJSX = [];
        for (let [index, hobby] of hobbies.entries()){
            hobbiesJSX.push(<li key={index}>{hobby}</li>)
        }
        return(
            <div>
                <p>Learn some information about this person</p>
                {
                    age > 21 ? (<h3>Lets have a drink</h3>) : (<h3>you must be 21 year old</h3>)
                }
                {
                    name.length > 8 ? (name.substring(0,6)) : (name)
                }
                {hobbiesJSX}
            </div>
        );
    }
}

class App3 extends React.Component{
    render(){
        let per1 = {name: "minh", age: "18", hobbies: ["swim", "video games", "waifu"]};
        let per2 = {name: "jamesasdcsad", age: "21", hobbies: ["dance", "talking", "waifu"]};
        return(
            <div>
                <h1>list of people: </h1>
                <Person person = {per1} />
                <Person person = {per2} />
            </div>
        );  
    }
}

ReactDOM.render(<Part1_3 name="minh" />, document.getElementById("app"));
ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<App3 />, document.getElementById("app"));