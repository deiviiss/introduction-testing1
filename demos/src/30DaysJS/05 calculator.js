function createCalculator () {
  let total = 0

  function add (num) {
    // recibe un número, lo suma al total y devuelve el resultado

    total = total + (num)
  }
  function subtract (num) {
    // recibe un número, lo resta al total y devuelve el resultado

    total = total - (num)
  }

  function multiply (num) {
    // recibe un número, lo multiplica al total y devuelve el resultado
    total = total * (num)
  }
  function divide (num) {
    // recibe un número, lo divide al total y devuelve el resultado
    total = total / (num)
  }
  function clear () {
    // reinicia el total a 0 y devuelve el resultado
    total = 0
  }
  function getTotal () {
    // devuelve el total actual.
    return total
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal
  }
}

const calculator = createCalculator()
calculator.add(10)
console.log(calculator.getTotal())
calculator.subtract(-10)
console.log(calculator.getTotal())
calculator.clear()
console.log(calculator.getTotal())
