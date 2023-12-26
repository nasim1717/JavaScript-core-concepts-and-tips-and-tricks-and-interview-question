// function display(some){
//     console.log(some);
// }

function calculator(num1, num2, callback){
    let sum = num1 + num2;
    // callback(sum);
    if(callback) callback(sum);
    
    return sum;
}

// calculator(5, 5, display);
calculator(5, 5, function(result){
    console.log(result);
})