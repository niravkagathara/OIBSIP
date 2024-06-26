function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value;
    let result;

    if (isNaN(temperature)) {
        result = "Please enter a valid temperature.";
    } else {
        if (scale === 'celsius') {
            result = (temperature * 9/5) + 32;
            result = `${result.toFixed(2)} °F`;
        } else if (scale === 'fahrenheit') {
            result = (temperature - 32) * 5/9;
            result = `${result.toFixed(2)} °C`;
        }
    }

    document.getElementById('result').innerText = result;
}
