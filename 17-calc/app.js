'use strict';

document.addEventListener('DOMContentLoaded', function() {
    clickMath();
});

const firstInput = document.querySelector('.num-one')
const secondInput = document.querySelector('.num-two')

const clearInput = () =>{
    document.querySelector('.num-one').value = ""
    document.querySelector('.num-two').value = ""
}

function clickMath(){
    document.querySelector(".sum").addEventListener('click', () => {
    const sum = Number(firstInput.value) + Number(secondInput.value)
    document.querySelector(".result").innerText = sum
    clearInput()
    })
    
    document.querySelector(".minus").addEventListener('click', () => {
    const minus = Number(firstInput.value) - Number(secondInput.value)
    document.querySelector(".result").innerText = minus
    clearInput()
    })

    document.querySelector(".multiply").addEventListener('click', () => {
    const multiply = Number(firstInput.value) * Number(secondInput.value)
    document.querySelector(".result").innerText = multiply
    clearInput()
    })

    document.querySelector(".separate").addEventListener('click', () => {
    const separate = Number(firstInput.value) / Number(secondInput.value)
    document.querySelector(".result").innerText = separate
    clearInput()
    })
}