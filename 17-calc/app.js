'use strict';

document.addEventListener('DOMContentLoaded', function() {
    clickMath();
});

function clearInput(){
    document.querySelector('.num-one').value = ""
    document.querySelector('.num-two').value = ""
}

function getInput(){
    const inputs = {
        firstInput : Number(document.querySelector('.num-one').value),
        secondInput : Number(document.querySelector('.num-two').value)
    }
    return inputs
}

function clickMath(){
    document.querySelector(".sum").addEventListener('click', function(){
    const sum = getInput().firstInput + getInput().secondInput
    document.querySelector(".result").innerText = sum
    clearInput()
    })
    
    document.querySelector(".minus").addEventListener('click', function(){
    const minus = getInput().firstInput - getInput().secondInput
    document.querySelector(".result").innerText = minus
    clearInput()
    })

    document.querySelector(".multiply").addEventListener('click', function(){
    const multiply = getInput().firstInput * getInput().secondInput
    document.querySelector(".result").innerText = multiply
    clearInput()
    })

    document.querySelector(".separate").addEventListener('click', function(){
    const separate = getInput().firstInput / getInput().secondInput
    document.querySelector(".result").innerText = separate
    clearInput()
    })
}