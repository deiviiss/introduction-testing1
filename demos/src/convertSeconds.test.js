const secondsConverter = require('./convertSeconds')

test('Converts seconds to hours, minutes and seconds', () => {
  const rta = secondsConverter(3600)
  expect(rta).toBe('1:0:0')

  const rta2 = secondsConverter(3700)
  expect(rta2).toBe('1:1:40')

  const rta3 = secondsConverter(0)
  expect(rta3).toBe('0:0:0')
})
