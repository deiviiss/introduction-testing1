const { sum, multiply, divide } = require('./02-math')
// import sum from './01-sum'

describe('Test for Math', () => {
  describe('Sum', () => {
    test('Agrega 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3)
    })
  })

  describe('Multiply', () => {
    test('Multiply 2 * 2 to equal 4', () => {
      expect(multiply(2, 2)).toBe(4)
    })
  })

  describe('Divide', () => {
    test('Should divide', () => {
      expect(divide(6, 3)).toBe(2)
      expect(divide(5, 2)).toBe(2.5)
    })
    test('Should divide for zero', () => {
      expect(divide(6, 0)).toBeNull()
      expect(divide(5, 0)).toBeNull()
    })
  })
})
