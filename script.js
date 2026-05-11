
const convertBtn = document.getElementById("convert-btn")
const input = document.getElementById("input")
const valueLen = document.getElementById("value-len")
const valueVol = document.getElementById("value-vol")
const valueMass = document.getElementById("value-mass")
const err = document.getElementById("err")
let errTimeout = null

let value = 0

convertBtn.addEventListener("click", function(){

    value = Number(input.value)

    if(value >= 0){

        const valueFeet = value * 3.28084
        const valueGallon = value * 0.264172
        const valuePound = value * 2.20462

        const valueMeter = value / 3.28084
        const valueLiter = value / 0.264172
        const valueKilo = value / 2.20462

        valueLen.textContent = `${value} meters = ${valueFeet.toFixed(2)} feet | ${value} feet = ${valueMeter.toFixed(2)} meters`
        valueVol.textContent = `${value} liters = ${valueGallon.toFixed(2)} gallons | ${value} gallons = ${valueLiter.toFixed(2)} liters`
        valueMass.textContent = `${value} kilos = ${valuePound.toFixed(2)} pounds | ${value} pounds = ${valueKilo.toFixed(2)} kilos`
    } else {

        err.textContent = "Don't Input Negative Values."
        clearTimeout(errTimeout)

        errTimeout = setTimeout(function() {
            err.textContent = ""
        }, 2000)

    }
})
