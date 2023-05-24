/* Para revertir un string en JavaScript, puedes usar el método split() para dividir el string en un array de caracteres, luego el método reverse() para invertir el orden del array y finalmente el método join() para unir los caracteres en un string de nuevo */

function findLargestPalindrome (words) {
  const palindrome = []
  let rta = null
  for (let index = 0; index < words.length; index++) {
    const word = words[index]
    const reversedStr = word.split('').reverse().join('')

    if (word === reversedStr) {
      palindrome.push(word)
      palindrome.sort((a, b) => b.length - a.length)
    }
  }

  if (palindrome.length > 0) {
    rta = palindrome[0]
  }
  return rta
}

findLargestPalindrome(['racecar', 'level', 'world', 'hello'])
