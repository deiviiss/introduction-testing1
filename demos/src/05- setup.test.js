describe('One Group', () => {
  test('should case1', () => {
    console.log('case 1')
    expect(1 + 1).toBe(2)
  })

  test('should case2', () => {
    console.log('case 2')
    expect(1 + 1).toBe(2)
  })

  describe('Set Other Group', () => {
    test('should case3', () => {
      console.log('case 3')
      expect(1 + 1).toBe(2)
    })

    test('should 4', () => {
      console.log('case 1')
      expect(1 + 1).toBe(2)
    })
  })
})
