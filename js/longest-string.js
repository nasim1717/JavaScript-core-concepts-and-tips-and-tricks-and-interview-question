function longestString(names){
    let longesWord = '';
    for(name of names){
        if(name.length > longesWord.length){
            longesWord = name;
        }
    }
    let pos = names.indexOf(longesWord);
    return pos;
}

console.log(longestString(['Sumit Saha', 'Learn with Sumit', 'akash', 'Saad','Diyan']));
