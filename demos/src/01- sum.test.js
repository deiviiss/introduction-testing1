const sum = require('./01-sum')
// import sum from './01-sum'

test('Agrega 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
