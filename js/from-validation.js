function validation() {
    const inpuObj = document.getElementById('id1');

    if(inpuObj.validity.rangeOverflow){
        inpuObj.setCustomValidity("You have made a range overflow");
    }else if(inpuObj.validity.rangeUnderflow){
        inpuObj.setCustomValidity('you have made a range underflow');
    }

    if(!inpuObj.checkValidity()){
        document.getElementById('demo').innerHTML = inpuObj.validationMessage;
    }
}