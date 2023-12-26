function loadData(myCallback){
    // create a new request
    const xhr = new XMLHttpRequest();

    // what to deo when response arrives
    xhr.onload = function() {
        myCallback(this);
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

function myCallback1(xhr) {
    const container = document.getElementById("demo");
    container.innerHTML = xhr.responseText;
}

function myCallback2(xhr) {
    const container = document.getElementById("demo2");
    container.innerHTML = xhr.responseText;
}