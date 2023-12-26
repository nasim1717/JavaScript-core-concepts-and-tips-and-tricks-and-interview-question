function sendRequest(method, url, data){
    
    const promis = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();

        xhr.onload = function (){
            // console.log(this.response);
            // handle application error
            if(this.status >= 400){
                reject(`There was an application error and the response status is ${this.status} and response text is `);
            }
            resolve(this.response);
        }

        xhr.onerror = function(){
            reject("There was an error");
        }
    
        xhr.open(method, url);
    
        xhr.responseType = "json";
    
        xhr.send(data);
    });
    return promis;
}

function getData(){
    sendRequest("GET","https://jsonplaceholder.typicode.com/posts/1").then(responseData =>{
        console.log(responseData);
    })
    .catch((err) =>{
        console.log(err);
    });
}

function sendData(){
    sendRequest("POSt","https://jsonplaceholder.typicode.com/posts",JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })).then(responseData =>{
        console.log(responseData);
    })
    .catch((err) =>{
        console.log(err);
    });
}

const getButton = document.getElementById("get");
const sendButton = document.getElementById("send");

getButton.addEventListener("click", getData);
sendButton.addEventListener("click", sendData);