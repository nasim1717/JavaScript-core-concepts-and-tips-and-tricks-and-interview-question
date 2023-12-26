const number = [1,3,4,6,1,3,6,5];

// uniqNumber ber korar function
const uniqNumber = number.filter(function(value,index,array){
    return array.indexOf(value) === index;
})

// console.log(uniqNumber);


// duplicate ber korar function
const duplicate = number.filter(function(value,index,array){
    return array.indexOf(value) !== index;
})

// console.log(duplicate);

const mixedArr = ["lws", undefined, 'learn With Sumith', false, "", "apple", 40, "k", true, "Thanks all", NaN];

// const trueArray = mixedArr.filter(function(el){
//     if(el){
//         return true;
//     }
//     // else{
//     //     return false;
//     // }
// });

/* Short cut teqnuq */
const trueArray = mixedArr.filter(Boolean);
console.log(trueArray);