const paymentSuccess = true;
const mark = 90;

function enrroll(){
    console.log('Course enrollment is in progress.');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
               reject('payment failed');
            }
        },2000);
    });

    return promise;
}

function progress(){
    console.log('Course on progress...');

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(mark >= 80){
                resolve();
            }else{
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000);
    });

    return promise;
}

function getCertificate(){
    console.log('Preparing your certificate!');

    const promise = new Promise(function(resolve){
        setTimeout(function(){
           resolve('Congrats! You got the certificate');
        },1000);
    });
    return promise;
}

enrroll()
.then(progress)
.then(getCertificate)
.then(function(value){
    console.log(value);
})
.catch(function(err){
    console.log(err);
});