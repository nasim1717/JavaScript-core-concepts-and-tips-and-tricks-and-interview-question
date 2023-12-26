function loadData(){
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to deo when response arrives
    xhr.onload = function (){
        const container = document.getElementById("demo");
        container.innerHTML = this.responseText;
    }

    // perpose request - methods: GET, POST, PUT, PATCH, DELETE
    xhr.open("GET", "./data/data.txt");

    // add a request headers
    // xhr.setRequestHeader("MY-GF", "JavaScript");

    // send request
    xhr.send();

    // abort
    // xhr.abort();
}

