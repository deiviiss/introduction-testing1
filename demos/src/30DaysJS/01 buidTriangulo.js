export default function printTriangle (size, character) {
  let spaces = []
  let triangulo

  // Agregar espacios en blanco para la primera fila del triángulo
  for (let i = 0; i < parseInt(size); i++) {
    spaces.push(' ')
  }

  // Construir el triángulo
  for (let i = 1; i <= parseInt(size); i++) {
    triangulo = `${spaces.join(' ') + character.repeat(i)} \n`
    spaces = spaces.slice(0, -1) // Eliminar un espacio en blanco para la siguiente fila
  }

  // Imprimir el triángulo
  console.log(triangulo)
}

printTriangle(3, '#')
