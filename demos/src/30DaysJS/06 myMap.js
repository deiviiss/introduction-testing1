function myMap (array, func) {
  // Tu código aquí 👈
  const newArray = []

  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    newArray.push(func(element))
  }

  return newArray
}

const names = [
  { name: 'michi', age: 2 },
  { name: 'firulais', age: 6 }]

myMap(names, (pet) => pet.name)
