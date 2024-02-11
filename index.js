let stupneFahrenheit = prompt("Zadejte teplotu ve stupních Fahrenheita: ")
let stupneCelsium = Math.ceil((stupneFahrenheit - 32) * (5/9))

document.body.innerHTML = '<h1>Hledaná hodnota je ' + stupneCelsium + ' °C</h1>'
