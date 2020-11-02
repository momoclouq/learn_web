function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}

//ajax is not a programming language
//ajax uses a combination of:
//a browser built-in XMLHttpRequest object (request data from a webserver)
//javascript and html dom (to display or use the data)
