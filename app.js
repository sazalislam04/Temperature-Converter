
function temperatureConvert(fahrenheit){
    fahrenheit = parseFloat(fahrenheit);
    document.getElementById('outputCelcius').innerHTML = (fahrenheit - 32) * 5/9;
}

function celciusConvert(celcius){
    celcius = parseFloat(celcius);
    document.getElementById('outputFahrenheit').innerHTML = (celcius * 9/5) + 32;
}