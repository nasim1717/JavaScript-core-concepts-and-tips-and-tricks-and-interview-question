function linearSearch(arr, val){
    let length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return "Not Found!";
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'e', 'c'],'c'));