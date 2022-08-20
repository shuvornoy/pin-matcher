function getPin(){
    const pin = genaretPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function genaretPin(){
    const random = Math.round(Math.random()*10000);
    
        return random;
}

document.getElementById('genaret-pin').addEventListener('click', function(){
    const pin = getPin();
    //disply pin
    const displayPinField = document.getElementById('disply-pin');
    displayPinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
        const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number === "C"){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digit = previousTypedNumber.split('');
            digit.pop();
            const remainiDigits = digit.join('');
            typedNumberField.value = remainiDigits;
        }
    }
    else{
        
        const newTypeNumber = previousTypedNumber + number;
        typedNumberField.value = newTypeNumber;
    }
})



document.getElementById('btn-submit').addEventListener('click', function(){
    const displayPinField = document.getElementById('disply-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typeNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(typeNumber === currentPin){
        
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
}
    else{
        
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';

    }

})