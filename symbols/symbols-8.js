var title = "javaScript";

// 1. title re new String("javaScript")
// 2. convet parmater "javaScript" into RegExp
// 3. RegExp er modhe Symbol.search() er implementance ache kina

// console.dir(String);
// console.log(title.search(/script/))

class Product {
    constructor(title) {
        this.title = title;
    }
    // implement search
    [Symbol.search](string) {
        return string.indexOf(this.title) >= 0 ? "Found" : "Not found";
    }
}

console.log("javaScript".search("script"));

var laptop = new Product('laptop');
'HP laptop'.search(laptop);