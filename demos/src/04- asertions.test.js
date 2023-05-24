// asertions / matchers

test('test objt', () => {
  const data = { name: 'David' }

  expect(data).toEqual({ name: 'David' })
})

test('test null', () => {
  const data = null

  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('test booleans', () => {
  const data = true

  expect(data).toEqual(true)
  expect(false).toEqual(false)

  expect(0).toBeFalsy()
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
})

test('test expresiones regulares', () => {
  const data = 'Christoph'

  expect(data).toMatch(/stop/)
})

test('test Arrays', () => {
  const data = [1, 2, 3]

  expect(data).toContain(3)
})
