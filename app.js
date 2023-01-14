// UI Variables
const convertFrom = document.getElementById('tempFromInput')
const convertTo = document.getElementById('tempToInput')
const selectFrom = document.getElementById('tempFrom')
const selectTo = document.getElementById('tempTo')
const calculateBtn = document.getElementById('calculateBtn')
const form = document.querySelector('form')
const result = document.getElementById('result')

// Listen to Select Change
selectFromChange()
calculate()


function calculate(){
  form.addEventListener('submit', function(e){
    if(selectFrom.value === selectTo.value){
      alert('Please convert different values')
    } else {
      if(selectFrom.value === 'Celsius'){
        convertFromCelsius(convertFrom.value)
      } else if(selectFrom.value === 'Fahrenheit'){
        convertFromFahrenheit(convertFrom.value)
      } else {
        convertFromKelvin(convertFrom.value)
      }
    }
    
    e.preventDefault()
  })
}

// Convert from celsius
function convertFromCelsius(unit){
  if(selectTo.value === 'Fahrenheit'){
    const fahrenheit = parseFloat(((9/5)*(parseFloat(unit))) + 32).toFixed(2)
    result.innerText = fahrenheit + ' ' + 'F'
  } else {
    console.log(unit);
    const kelvin = parseFloat(parseFloat(unit)+273.15).toFixed(2)
    result.innerText = kelvin + ' ' + 'K'
  }
}

// Convert from fahrenheit
function convertFromFahrenheit(unit){
  if(selectTo.value === 'Celsius'){
    const celsius = parseFloat((5/9)*(parseFloat(unit) - 32)).toFixed(2)
    result.innerText = celsius + ' ' + 'C'
  } else {
    const kelvin = parseFloat(((5/9)*(parseFloat(unit)-32)) + 273.15).toFixed(2)
    result.innerText = kelvin + ' ' + 'K'
  }
}

// Convert from Kelvin
function convertFromKelvin(unit){
  if(selectTo.value === 'Celsius'){
    const celsius = parseFloat(parseFloat(unit) - 273.15).toFixed(2)
    result.innerText = celsius + ' ' + 'C'
  } else {
    const fahrenheit = parseFloat(((9/5)*(parseFloat(unit) - 273.15)) + 32).toFixed(2)
    result.innerText = fahrenheit + ' ' + 'F'

  }
}

function selectFromChange(){
  selectFrom.addEventListener('change', changeFrom)
}

function changeFrom(e){
  const unit = e.target.value

  if(unit === 'Celsius'){
    document.getElementById('tempFromInput').nextElementSibling.innerText = 'Celsius Value'
  } else if (unit === 'Fahrenheit'){
    document.getElementById('tempFromInput').nextElementSibling.innerText = 'Fahrenheit Value'
  } else {
    document.getElementById('tempFromInput').nextElementSibling.innerText = 'Kelvin Value'
  }
}

