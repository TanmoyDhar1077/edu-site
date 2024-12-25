const temperature = document.querySelector(".temperature input");
const result = document.querySelector(".result input");
const inputTemperatureUnit = document.querySelector(".temperature select");
const resultTemperatureUnit = document.querySelector(".result select");

const convertTemperature = () => {
  let inputTemperatureUnitValue = inputTemperatureUnit.value;
  let resultTemperatureUnitValue = resultTemperatureUnit.value;

  // Ensure the input is a number
  let inputTemperatureValue = parseFloat(temperature.value);
  if (isNaN(inputTemperatureValue)) {
    result.value = '';
    return;
  }

  // Conversion Logic
  let convertTemperatureValue = 0;

  // From Celsius to Other Units
  if (inputTemperatureUnitValue === "Celsius") {
    if (resultTemperatureUnitValue === "Kelvin") {
      convertTemperatureValue = inputTemperatureValue + 273.15;
    } else if (resultTemperatureUnitValue === "Fahrenheit") {
      convertTemperatureValue = (9 / 5) * inputTemperatureValue + 32;
    } else {
      convertTemperatureValue = inputTemperatureValue; // Same unit
    }
  }
  // From Kelvin to Other Units
  else if (inputTemperatureUnitValue === "Kelvin") {
    if (resultTemperatureUnitValue === "Celsius") {
      convertTemperatureValue = inputTemperatureValue - 273.15;
    } else if (resultTemperatureUnitValue === "Fahrenheit") {
      convertTemperatureValue = (9 / 5) * (inputTemperatureValue - 273.15) + 32;
    } else {
      convertTemperatureValue = inputTemperatureValue; // Same unit
    }
  }
  // From Fahrenheit to Other Units
  else if (inputTemperatureUnitValue === "Fahrenheit") {
    if (resultTemperatureUnitValue === "Celsius") {
      convertTemperatureValue = (5 / 9) * (inputTemperatureValue - 32);
    } else if (resultTemperatureUnitValue === "Kelvin") {
      convertTemperatureValue = (5 / 9) * (inputTemperatureValue - 32) + 273.15;
    } else {
      convertTemperatureValue = inputTemperatureValue; // Same unit
    }
  }

  // Update the result input with the converted temperature
  result.value = convertTemperatureValue.toFixed(2);
};

// Event listeners for input and select changes
temperature.addEventListener("input", convertTemperature);
inputTemperatureUnit.addEventListener("change", convertTemperature);
resultTemperatureUnit.addEventListener("change", convertTemperature);

