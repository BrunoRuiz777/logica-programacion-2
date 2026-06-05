let temperaturaCelsius; 

    do {
    temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius: ");
    
    temperaturaCelsius = parseFloat(temperaturaCelsius);

    if (Number.isNaN(temperaturaCelsius)) {
        alert("¡Oye! Eso no es un número. Vuelve a intentar.");
    }

    } while (Number.isNaN(temperaturaCelsius)); 

    let temperaturaKelvin = temperaturaCelsius + 273.15;

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    document.getElementById("resultado-kelvin").innerText = "Grados Kelvin: " + temperaturaKelvin;

    document.getElementById("resultado-fahrenheit").innerText = "Grados Fahrenheit: " + temperaturaFahrenheit;